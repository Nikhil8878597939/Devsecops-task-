# Repo Structure 
devsecops-task/
├── app/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── terraform/
│   └── main.tf
│
├── README.md
└── report-template.md

# DevSecOps Secure Microservice Deployment

##  Overview
This project demonstrates securing a Node.js + MongoDB microservice using DevSecOps best practices.

### Features
- Hardened Dockerfile (multi-stage, non-root, minimal image)
- CI/CD with GitHub Actions:
  - Static code analysis (Semgrep)
  - Container scanning (Trivy)
  - Security gates (fail build on high/critical issues)
- Secrets management (Kubernetes secrets / Vault / AWS Secrets Manager)
- Infrastructure as Code (Terraform) with security scanning
- (Bonus) Runtime security with Seccomp/AppArmor

##  Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/Nikhil8878597939/Devsecops-task.git
   cd devsecops-task

2. Build and run locally:

   docker build -t secure-app .
   docker run -p 3000:3000 secure-app


3. Run security scans:

   trivy image secure-app
   dockle secure-app



## Deliverables

Dockerfile (hardened)

.github/workflows/ci.yml (pipeline)

terraform/ (infrastructure IaC)

report-template.md (final report)
