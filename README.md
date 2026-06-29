# NODE.JS-PRACTICE

# Namaste Node.js
=================

  # What is Node.js
    Node.js is a JavaScript runtime and it is built on top of Chrome's V8 JavaScript engine.
    JavaScript Runtime
    A JavaScript runtime is the environment where JavaScript code is executed.
    The complete environment (engine + APIs + event loop) that allows JavaScript code to run and interact with the outside world.
    JavaScript Runtime / Environment

    +-------------------------+
    | JS Engine               | ---> Executes JS code
    | Web / APIs              | ---> Provide extra features
    | Event Loop              | ---> Manage async behaviour
    +-------------------------+
    Asynchronous I/O known as Non-Blocking I/O.
    Node.js was introduced by Ryan Dahl in 2009.
    Whenever there is JavaScript, there is a JavaScript engine.
    Node.js is a C++ application with V8 embedded into it.
    Node.js runs on the V8 JavaScript engine and executes JavaScript code outside the Web browser.
    When Ryan Dahl developed Node.js for the first time, he didn't use Chrome's JavaScript engine. He started with Firefox's SpiderMonkey JavaScript engine.
    After 2 days of building Node.js, he stopped using SpiderMonkey and used Chrome's V8 JavaScript engine.
    Joyent company and Ryan Dahl together built Node.js.

                        FILE / NETWORK
                           │
                           ▼
                 Operating System
                           │
        ┌──────────────────┴─────────────────┐
        ▼                                    ▼
 File System                           TCP Socket
        │                                    │
        ▼                                    ▼
Thread Pool                          Socket Buffer
        │                                    │
        └───────────────┬────────────────────┘
                        ▼
                      libuv
                        ▼
                   Event Loop
                        ▼
                 Readable Stream
                        ▼
             Buffer (Chunk 1)
                        ▼
                  "data" Event
                        ▼
               Your JavaScript Code
                        ▼
             Buffer (Chunk 2)
                        ▼
                  "data" Event
                        ▼
               Your JavaScript Code
                        ▼
             Buffer (Chunk 3)
                        ▼
                  ...


┌─────────────────────────────────────────────────────┐
│                    CLIENT                           │
│               Browser / App                         │
└─────────────────────┬───────────────────────────────┘
                      │
                      │ HTTP Request
                      ▼
┌─────────────────────────────────────────────────────┐
│                    INTERNET                         │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                 OPERATING SYSTEM                    │
│                                                     │
│  TCP/IP Stack                                       │
│  Socket Management                                  │
│  Network Drivers                                    │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│               Listening Socket                      │
│                   Port 3000                         │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                     epoll                           │
│       (Scalable I/O Event Notification)             │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                     libuv                           │
│                                                     │
│ Event Loop                                          │
│ Timers                                              │
│ Poll                                                │
│ Check                                               │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                       V8                            │
│                 JavaScript Engine                   │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│                  JS Callback                        │
│      (req,res)=>res.end("Hello")                    │
└─────────────────────────────────────────────────────┘



                                 CLIENT

User
 │
 ▼
Browser
 │
 ▼
DNS Lookup
 │
 ▼
DNS Server
 │
 ▼
Server IP
 │
 ▼
Create Client Socket
 │
 ▼
TCP Handshake
 │
 ▼
════════════════════════════ INTERNET ════════════════════════════
 │
 ▼

SERVER

Network Card (NIC)
 │
 ▼
Operating System Kernel
 │
 ▼
TCP/IP Stack
 │
 ▼
Listening Socket
 │
 ▼
Connected Socket
 │
 ▼
epoll (Linux)
kqueue (macOS)
IOCP (Windows)
 │
 ▼
Scalable I/O Event Notification
 │
 ▼
libuv
 ├─────────────────────────────┐
 │                             │
 ▼                             ▼
Event Loop                 Thread Pool
 │                             │
 │                       fs.readFile()
 │                       crypto
 │                       dns.lookup()
 │                       zlib
 │                             │
 └──────────────┬──────────────┘
                ▼
          Callback Queue
                ▼
               V8
                ▼
          JavaScript Callback
                ▼
          res.end("Hello")
                ▼
Socket Send Buffer
                ▼
Operating System
                ▼
Internet
                ▼
Client Socket
                ▼
Browser
                ▼
User Sees Response


┌───────────────────────────────────────────────────────────────────────────────┐
│                               Browser                                         │
└───────────────────────────────────────────────────────────────────────────────┘
                    │
                    ▼
           DNS Resolution
                    │
                    ▼
           Local DNS Cache
                    │
           Miss?───────────────No────────────► Return Cached IP
             │
            Yes
             │
             ▼
      Recursive DNS Resolver
             │
             ▼
       Root DNS Server
             │
             ▼
         TLD Server
             │
             ▼
    Authoritative DNS Server
             │
             ▼
        Return IP Address
             │
             ▼
      TCP Socket Creation
             │
             ▼
        TCP Handshake
             │
             ▼
          Internet
             │
             ▼
      Network Interface Card
             │
             ▼
         Kernel TCP Stack
             │
             ▼
      Listening Socket
             │
             ▼
      Connected Socket
             │
             ▼
      epoll Interest List
             │
             ▼
         Ready Queue
             │
             ▼
           libuv
             │
             ▼
        Event Loop
             │
             ▼
        Poll Phase
             │
             ▼
        V8 Engine
             │
             ▼
      JavaScript Callback


like this diagram can you make me a one that holeds all the steps 




zsA7KyhcGmyV54Q0