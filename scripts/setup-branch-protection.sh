#!/bin/bash

# GitHub Branch Protection Setup Script
# Run this after pushing the actions to your repository

echo "🛡️  Setting up GitHub branch protection rules..."
echo ""
echo "Please run these commands in your terminal after creating the GitHub repository:"
echo ""
echo "# Install GitHub CLI if you haven't already"
echo "brew install gh  # macOS"
echo ""
echo "# Login to GitHub CLI"
echo "gh auth login"
echo ""
echo "# Set up branch protection for main branch"
echo 'gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='\''{"strict":true,"contexts":["quality-checks (18.x)","quality-checks (20.x)","quality-gate","dependency-review"]}'\'' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='\''{"required_approving_review_count":1,"dismiss_stale_reviews":true}'\'' \
  --field restrictions=null'
echo ""
echo "This will require:"
echo "✅ PR reviews (1 approver)"
echo "✅ Status checks to pass"
echo "✅ Up-to-date branches"
echo "✅ No direct pushes to main"
echo ""
echo "Alternative: Set up via GitHub web interface:"
echo "Repository Settings → Branches → Add rule for 'main'"