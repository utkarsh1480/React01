XSS(cross site scription)- An attacker injects malicious JavaScript into a webpage so that it executes in another user's browser.
Possible consequences:
- Steal session information
- Modify what the victim sees
- Perform actions as the victim
- Redirect the user to another website
  
DDoS — Distributed Denial of Service (Meaning): The attacker uses many machines/devices to send huge amounts of traffic or requests to a server.
- Make a website/service unavailable to legitimate users.

Man-in-the-Middle (MITM) Meaning: An attacker secretly positions themselves between two parties communicating with each other.
Goal:
- Intercept information
- Steal credentials
- Modify communication

Single Sign-On (SSO)- It means you log in once and then access multiple applications without logging in separately to each one.
        Login once
            ↓
      Google Account
       ↙    ↓    ↘
    Gmail Drive Classroom

Firewall - A firewall is primarily a security system that controls network traffic based on rules.
When authentication is involved, the firewall can require a user/device to prove their identity before allowing access to a protected network or resource.

MFA / 2FA(Multi-factor authentication) - It requires two or more different authentication factors.
Something you know
Example:
- Password
- PIN
2. Something you have
Example:
- Phone
- Security token
- Smart card
3. Something you are
Example:
- Fingerprint
- Face
- Iris

  ### What is Blue-Green Deployment
  Suppose a company has a production application running for customers.
Instead of directly replacing the running application with a new version, the company maintains two identical environments:
The environments should be as similar as possible so that the new version behaves similarly to the real production environment.

When infrastructure is created using configuration/code files rather than manually clicking through a cloud console → IaC.

| Term | Area | Main Purpose |
|---|---|---|
| **Normalization** | Database | Reduce data redundancy |
| **Serialization** | Programming/Data | Convert data/object into storable/transmittable format |
| **Static Hosting** | Web/Cloud | Serve static website files |

200 → Success
201 → Created
400 → Bad Request
401 → Authentication required/invalid
403 → Authenticated but not authorized
404 → Not Found
429 → Too Many Requests
500 → Internal Server Error

TCP — Transmission Control Protocol - TCP is a connection-oriented and reliable transport protocol.
Its main job is to make sure that data reaches the destination reliably and in the correct order.

TCP provides:
- Reliable delivery
- Ordered delivery
- Error detection
- Retransmission
- Flow control
- Congestion control
- Connection management


TCP acknowledgments are associated with sequence numbers. The ACK tells the sender what data has been received and what byte/sequence is expected next.

The receiver doesn't receive it, so the sender won't get the expected acknowledgment for that data. TCP can then retransmit the missing data.

UDP — User Datagram Protocol UDP is a connectionless transport protocol. Unlike TCP, UDP does not establish a connection before sending data.
UDP does NOT guarantee:
- Delivery
- Ordering
- Retransmission

Then why use UDP?
Because UDP is generally faster and has lower overhead.
Some applications care more about speed and low latency than perfect delivery.

Examples:
- Online gaming
- Live video/audio
- DNS
- VoIP
- Real-time communicationm Imagine you're watching a live cricket match.
Suppose one video frame is lost.
Would you rather:
Wait 2 seconds for the missing frame
or
Continue showing the live video
For real-time applications, continuing is often preferable.

FTP stands for: File Transfer Protocol: Its purpose is to transfer files between a client and a server.

You can:
- Upload files
- Download files
- List files
- Rename files
- Delete files
- Manage directories

  Traditional FTP is not encrypted.

  (SMTP) - Simple Mail Transfer Protocol SMTP is used primarily for sending email.
  For retrieving email, commonly used protocols include:
- IMAP
- POP3

  Region → Availability Zones → Servers
- Region = geographical location
- Availability Zone (AZ) = isolated data center/location inside a region
- VPC = isolated virtual network

  DHCP — Dynamic Host Configuration Protocol
  First: Why do we need DHCP?When your laptop connects to Wi-Fi, it needs some network information to communicate.

   Laptop needs:

IP Address       → 192.168.1.10
Subnet Mask      → 255.255.255.0
Default Gateway  → 192.168.1.1
DNS Server       → 8.8.8.8

magine having to manually enter all of this every time you connect to Wi-Fi. 😵

DHCP automatically provides devices with IP configuration

How does DHCP actually work?
1: Discover: Is there any DHCP server here? I need an IP address."
2: offer : I can give you this IP address.
3: Request : Yes, I want that IP address.
4: Acknowledgment : Okay, you can use it.


VPN : A VPN creates a secure/tunneled connection between your device and a VPN server over an existing network.
You don't necessarily want your network traffic exposed to other parties on the local network.
Port 143

What is IMAP: IMAP is an email protocol used mainly to access and synchronize emails stored on a mail server.
IMAP lets your email app access and synchronize your emails while they remain stored on the mail server.
Why do we need IMAP?
Imagine you have the same Gmail account on:
📱 Phone
💻 Laptop
🖥️ Desktop
Suppose you read an email on your phone.
With IMAP, the mail server can maintain the email's state, so your other devices can see that the email has been read.

POP3 : POP3 is traditionally designed around downloading messages from the server to a client.

Telnet is a network protocol and command-line tool used to communicate with another computer or device over a local network or the internet.
Port 23: It normally communicates over TCP port 23 in an unencrypted text format.

Blocks all inbound traffic → firewall is restricting incoming connections.
Except ports 80 and 443 → only specific services are allowed.
Firewall → controls network traffic according to rules

Attack surface = all the points through which an attacker could potentially interact with or attack a system.






















  
