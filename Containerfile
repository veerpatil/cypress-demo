# Start with a base image that has Node.js installed
FROM cypress/base:22.13.0

# Install JDK
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

# Set JAVA_HOME environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-arm64
ENV PATH="$JAVA_HOME/bin:$PATH"

# Install Cypress (this will also install the Cypress browsers)
RUN npm install -g cypress@10.3.0

# Verify installations
RUN node --version && npm --version && java -version && cypress --version

# Set the working directory
WORKDIR /app

COPY package*.json ./

# Add the project files (if needed) to the image
COPY . .

# Install Allure CLI globally
RUN npm install -g allure-commandline --save-dev

RUN npm install cypress@10.3.0
RUN command -v cypress
RUN npm install
# Create directories for Allure results and reports
RUN mkdir -p /app/allure-results /app/allure-report

# Expose a port for serving the Allure report (optional)
EXPOSE 8080

# Run Cypress tests and generate Allure report
CMD ["sh", "-c", "npx cypress run --env allure=true  && allure generate /app/allure-results --clean -o /app/allure-report && allure open /app/allure-report"]