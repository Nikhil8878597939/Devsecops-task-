## 1. Risks Identified
- Base image vulnerabilities
- Hardcoded secrets risk
- Excessive IAM permissions

## 2. Implemented Security Controls
- Hardened Dockerfile (minimal image, non-root, multi-stage)
- CI/CD pipeline with security scans (Semgrep, Trivy)
- Secrets management via Kubernetes/AWS
- IaC scanning (tfsec, checkov)

## 3. Recommendations for Production
- Implement runtime security (Falco, Seccomp, AppArmor)
- Enable centralized logging & monitoring
- Add WAF & API Gateway for external traffic
- Regular vulnerability scanning & patching
