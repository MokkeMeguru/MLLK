FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/fool.jar /fool/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/fool/app.jar"]
