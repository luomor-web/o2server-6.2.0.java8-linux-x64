FROM openjdk:8-jre
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' > /etc/timezone
COPY o2server o2server
WORKDIR o2server
ENTRYPOINT ["start_linux.sh"]