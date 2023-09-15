#Downloading the image golang alpine. More lighter
FROM golang:alpine as builder 

#Creating my working directory as root folder /app
WORKDIR /app

# Copy over all go config (go.mod, go.sum etc.)
COPY go.* ./

# Install any required modules
RUN go mod download

#Copying all my info from html folder to root folder /app
COPY *.go ./

# Run the Go build and output binary under full-cycle-demo
RUN go build -o /full-cycle-demo ./main.go

FROM scratch

WORKDIR /app

#copying from builder to /full-cycle-demo
COPY --from=0 /full-cycle-demo /full-cycle-demo

#EXPOSE 8081

# Run the app binary when we run the container
CMD ["/full-cycle-demo"]