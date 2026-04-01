# **Build and Deploy Node.js Application using Docker + GitHub Actions + AWS EC2**

## **Core Objectives**
1. Automate the deployment pipeline
2. Reduce the manual effort
3. Automatically trigger build steps
4. Deploy after test pass

## **Tech Stack**
1. Node.js + Express - Backend
2. Docker - Application Containerization
3. Github Actions - CI/CD
4. AWS EC2 - Cloud compute for hosting the app 
5. Linux(Ubuntu) - Server Operating System


## **Steps to Implement**
1. Launch an EC2 instance (Ubuntu) and create a security group with SSH and custom TCP for the Docker container.
2. Manually deploy the application/API on EC2 to verify it builds and runs correctly.
3. Install Docker on the EC2 instance and test running containers.
4. Create a Dockerfile for the application and build the Docker image locally.
5. Push the Docker image to Docker Hub using an access token stored in GitHub Secrets.
6. Write a GitHub Actions workflow to automate building and pushing the Docker image.
7. Add steps in the workflow to SSH into EC2, pull the latest image, and run the container automatically.


## **Problems that I faced and How I solved it**
1. When I created the EC2 instance, I used a single security group with two inbound rules: SSH and the custom TCP port for my Docker container, both restricted to my IP. This worked fine for manual deployment. But GitHub Actions couldn’t deploy because it runs from a different IP, so SSH was blocked. Changing the SSH rule to allow traffic from anywhere fixed the issue, and the deployment worked. Though allowing traffic from anywhere for SSH is not recommended, I reverted back my changes & restricted to my IP only.
2. In the last step of my GitHub Actions workflow, pulling and running the Docker image failed because the default ubuntu user couldn’t run Docker commands. Adding ubuntu to the Docker group with usermod fixed the issue.
3. While pushing the image to Docker Hub, I used an access token stored in GitHub Secrets instead of my password. The workflow failed because the token was Read-Only by default. Changing it to Read & Write allowed the image to be pushed successfully.