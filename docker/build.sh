#!/bin/bash

###############################################################################
# Docker Build Script for Computor Web Frontend
#
# This script builds the Docker image for the Next.js frontend application.
# It reads configuration from .env.local or .env file.
#
# Usage:
#   ./docker/build.sh [options]
#
# Options:
#   --no-cache        Build without using Docker cache
#   --push            Push image to registry after build
#   --tag <tag>       Override image tag (default: from .env or 'latest')
#   --help            Show this help message
#
# Environment Variables (from .env.local or .env):
#   DOCKER_IMAGE_NAME       Docker image name (default: computor-web)
#   DOCKER_IMAGE_TAG        Docker image tag (default: latest)
#   DOCKER_REGISTRY         Docker registry URL (optional)
#   NEXT_PUBLIC_API_URL     Backend API URL for build
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
NO_CACHE=""
PUSH_IMAGE=false
OVERRIDE_TAG=""

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to show help
show_help() {
    cat << EOF
Docker Build Script for Computor Web Frontend

Usage: ./docker/build.sh [options]

Options:
    --no-cache        Build without using Docker cache
    --push            Push image to registry after build
    --tag <tag>       Override image tag (default: from .env or 'latest')
    --help            Show this help message

Environment Variables (from .env.local or .env):
    DOCKER_IMAGE_NAME       Docker image name (default: computor-web)
    DOCKER_IMAGE_TAG        Docker image tag (default: latest)
    DOCKER_REGISTRY         Docker registry URL (optional)
    NEXT_PUBLIC_API_URL     Backend API URL for build

Examples:
    # Basic build
    ./docker/build.sh

    # Build without cache
    ./docker/build.sh --no-cache

    # Build and push to registry
    ./docker/build.sh --push

    # Build with custom tag
    ./docker/build.sh --tag v1.2.3

    # Build and push with custom tag
    ./docker/build.sh --tag v1.2.3 --push

EOF
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --no-cache)
            NO_CACHE="--no-cache"
            shift
            ;;
        --push)
            PUSH_IMAGE=true
            shift
            ;;
        --tag)
            OVERRIDE_TAG="$2"
            shift 2
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Get the project root directory (parent of docker/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

print_info "Project root: $PROJECT_ROOT"

# Load environment variables from .env.local or .env
if [ -f "$PROJECT_ROOT/.env.local" ]; then
    print_info "Loading environment from .env.local"
    set -a
    source "$PROJECT_ROOT/.env.local"
    set +a
elif [ -f "$PROJECT_ROOT/.env" ]; then
    print_info "Loading environment from .env"
    set -a
    source "$PROJECT_ROOT/.env"
    set +a
else
    print_warning "No .env.local or .env file found, using defaults"
fi

# Set default values if not provided
DOCKER_IMAGE_NAME="${DOCKER_IMAGE_NAME:-computor-web}"
DOCKER_IMAGE_TAG="${DOCKER_IMAGE_TAG:-latest}"
NEXT_PUBLIC_API_URL="${NEXT_PUBLIC_API_URL:-http://localhost:8000}"

# Override tag if provided via command line
if [ -n "$OVERRIDE_TAG" ]; then
    DOCKER_IMAGE_TAG="$OVERRIDE_TAG"
fi

# Construct full image name
if [ -n "$DOCKER_REGISTRY" ]; then
    FULL_IMAGE_NAME="${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
else
    FULL_IMAGE_NAME="${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
fi

# Print build configuration
echo ""
print_info "========================================"
print_info "Docker Build Configuration"
print_info "========================================"
print_info "Image Name:     $DOCKER_IMAGE_NAME"
print_info "Image Tag:      $DOCKER_IMAGE_TAG"
print_info "Full Image:     $FULL_IMAGE_NAME"
print_info "Registry:       ${DOCKER_REGISTRY:-<none (local build)>}"
print_info "API URL:        $NEXT_PUBLIC_API_URL"
print_info "Cache:          ${NO_CACHE:+disabled}"
print_info "Push after:     ${PUSH_IMAGE}"
print_info "========================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed or not in PATH"
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    print_error "Docker daemon is not running"
    exit 1
fi

# Build the image
print_info "Starting Docker build..."
echo ""

BUILD_START=$(date +%s)

docker build \
    $NO_CACHE \
    -f "$SCRIPT_DIR/Dockerfile" \
    -t "$FULL_IMAGE_NAME" \
    --build-arg NEXT_PUBLIC_API_URL="$NEXT_PUBLIC_API_URL" \
    "$PROJECT_ROOT"

BUILD_END=$(date +%s)
BUILD_DURATION=$((BUILD_END - BUILD_START))

echo ""
print_success "Docker build completed in ${BUILD_DURATION}s"
print_success "Image: $FULL_IMAGE_NAME"

# Show image size
IMAGE_SIZE=$(docker images "$FULL_IMAGE_NAME" --format "{{.Size}}" | head -n 1)
print_info "Image size: $IMAGE_SIZE"

# Tag latest if we're building with a specific tag (and not already latest)
if [ "$DOCKER_IMAGE_TAG" != "latest" ]; then
    LATEST_TAG="${DOCKER_REGISTRY:+${DOCKER_REGISTRY}/}${DOCKER_IMAGE_NAME}:latest"
    print_info "Tagging as latest: $LATEST_TAG"
    docker tag "$FULL_IMAGE_NAME" "$LATEST_TAG"
fi

# Push to registry if requested
if [ "$PUSH_IMAGE" = true ]; then
    if [ -z "$DOCKER_REGISTRY" ]; then
        print_error "Cannot push: DOCKER_REGISTRY is not set in .env"
        exit 1
    fi

    echo ""
    print_info "Pushing image to registry..."

    docker push "$FULL_IMAGE_NAME"

    if [ "$DOCKER_IMAGE_TAG" != "latest" ]; then
        docker push "$LATEST_TAG"
    fi

    print_success "Image pushed to registry"
fi

# Print next steps
echo ""
print_info "========================================"
print_success "Build Complete!"
print_info "========================================"
echo ""
print_info "Next steps:"
echo ""
echo "  # Run the container locally:"
echo "  docker run -d -p 3000:3000 \\"
echo "    -e NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL \\"
echo "    --name computor-web \\"
echo "    $FULL_IMAGE_NAME"
echo ""
echo "  # View logs:"
echo "  docker logs -f computor-web"
echo ""
echo "  # Stop the container:"
echo "  docker stop computor-web && docker rm computor-web"
echo ""

if [ "$PUSH_IMAGE" = false ] && [ -n "$DOCKER_REGISTRY" ]; then
    echo "  # Push to registry:"
    echo "  docker push $FULL_IMAGE_NAME"
    echo ""
fi

print_info "========================================"
