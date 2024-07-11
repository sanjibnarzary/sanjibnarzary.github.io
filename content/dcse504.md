---
title: "Lecture Plan: DCSE504 Cryptography and Network Security"
description: "Lecture Plan: DCSE504 Cryptography and Network Security"
summary: "Lecture Plan: DCSE504 Cryptography and Network Security"
date: 2024-07-07T17:19:07+02:00
lastmod: 2024-07-09T17:19:07+02:00
draft: false
type: "doc"
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
<!-----



Conversion time: 1.281 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β36
* Thu Jul 11 2024 00:51:49 GMT-0700 (PDT)
* Source doc: Lecture Notes: Cryptography & Network Security (DCSE504)
* Tables are currently converted to HTML tables.
----->



## **Computer Science and Engineering**

Central Institute of Technology Kokrajhar


## **Lecture Notes: Cryptography & Network Security (DCSE504)**

Credits: 6

L-T-P: 3-0-0

**Module 1: Introduction to Cryptography & Network Security (4 Hours)**

**1.1 The Need for Security**



    * Importance of protecting information in the digital age
    * Threats from unauthorized access, modification, and interception
    * Real-world examples of security breaches

**1.2 Principles of Security** (CIA triad)



    * **Confidentiality:** Ensuring only authorized users can access information.
    * **Integrity:** Guaranteeing data remains unaltered during transmission or storage.
    * **Authentication:** Verifying the identity of a user or system.
    * **Non-repudiation:** Preventing someone from denying an action they performed.
    * **Access Control:** Regulating access to specific resources based on permissions.
    * **Availability:** Ensuring authorized users can access information and systems when needed.

**1.3 Types of Attacks (4 hours)**



    * **Passive Attacks:** Eavesdropping (snooping), traffic analysis
    * **Active Attacks:** Tampering with data, masquerading as another user, denial-of-service attacks
    * **Malicious Software:** Viruses, worms, Trojan horses
    * **Social Engineering:** Techniques to trick users into revealing information or taking actions.
    * **Specific Attacks:**
        * Spoofing: Forging source address to impersonate another user/system.
        * Phishing: Deceptive emails or websites tricking users into revealing personal information.
        * Pharming: Redirecting users to malicious websites by manipulating DNS records.

**Module 2: Concept and Techniques of Cryptography (8 Hours)**

**2.1 Plain Text and Cipher Text**



    * Plain text: Original, unencrypted message.
    * Cipher text: Encrypted message, unreadable without a decryption key.

**2.2 Substitution Techniques (4 hours)**



    * Replacing characters in the plain text with different characters or symbols.
    * Examples: Caesar Cipher, Monoalphabetic substitution, Polyalphabetic substitution (Vigenere Cipher,Playfair Cipher, Hill Cipher).

**2.3 Transposition Techniques (2 hours)**



    * Rearranging the order of characters in the plain text.
    * Examples: Rail Fence Technique, Simple Columnar Transposition.

**2.4 Encryption and Decryption**



    * Processes of transforming plain text to cipher text and vice versa.

**2.5 Symmetric and Asymmetric Key Cryptography**



    * **Symmetric Key:** Same key used for encryption and decryption (shared secret).
    * **Asymmetric Key:** Public and private key pair used for encryption and decryption (public key for encryption,private key for decryption).

**2.6 Steganography**



    * Hiding the existence of a message within another medium (image, audio).

**Module 3: Symmetric Key Algorithms (10 Hours)**

**3.1 Algorithm Types and Modes of Operation (ECB, CBC, CFB, OFB, CTR)**



    * Different encryption algorithms used for symmetric key cryptography.
    * Modes of operation determine how blocks of data are processed during encryption/decryption.

**3.2 Overview of Symmetric Key Cryptography**



    * Advantages and limitations of symmetric key algorithms.

**3.3 Data Encryption Standard (DES)**



    * A widely used, now outdated, symmetric key algorithm.
    * Understanding the DES algorithm structure and limitations.

**3.4 Advanced Encryption Standard (AES)**



    * The current standard for symmetric key encryption, considered more secure than DES.
    * Exploring the key features and strengths of AES.

**Module 4: Asymmetric Key Algorithms (10 Hours)**

**4.1 Overview of Asymmetric Key Cryptography**



    * Advantages and disadvantages compared to symmetric key algorithms.
    * Applications for public key cryptography (secure communication, digital signatures).

**4.2 The RSA Algorithm (Rivest–Shamir–Adleman)**



    * A widely used public key cryptography algorithm.
    * Understanding the key generation process and mathematical foundation of RSA.
    * Exploring practical applications of RSA (digital signatures, key exchange).

**4.3 Symmetric and Asymmetric Key Cryptography Together**



    * Hybrid cryptosystems utilizing both symmetric and asymmetric keys for efficiency and security.
    * Common use cases for hybrid systems.

**4.4 Digital Signature, Message Digest (Hashing), MD5, Secure Hash Algorithm (SHA), Hash-based Message Authentication Code (HMAC)**



    * Digital signatures for message authentication and non-repudiation.
    * Message digest algorithms (MD5, SHA) for data integrity verification.
    * HMAC combining message digest with a secret key for message authentication.

**Module 5: Authentication (5 Hours)**

**5.1 Authentication Basics**



    * Importance of user and system authentication for secure access.
    * Different authentication factors (something you know, something you have, something you are).

**5.2 Password-Based Authentication**



    * Common method for user authentication, with inherent vulnerabilities (weak passwords, password cracking).
    * Techniques for strengthening password security (password complexity requirements, password hashing).

**5.3 Public Key Infrastructures (PKI)**



    * A framework for managing digital certificates and public keys for secure communication.
    * Components of PKI (Certificate Authorities, Registration Authorities, digital certificates).

**5.4 Certification Authorities (CAs) and Key Distribution Centers (KDCs)**



    * Roles of CAs in issuing and managing digital certificates.
    * KDCs and their role in securely distributing keys in Kerberos authentication.

**5.5 Kerberos**



    * A network authentication protocol using a central KDC for secure user authentication.
    * Understanding the Kerberos authentication process and its benefits.

**Module 6: Firewall (5 Hours)**

**6.1 Firewall Characteristics**



    * Definition of a firewall and its role in network security.
    * Types of firewalls (packet filtering, stateful inspection, application-level).

**6.2 Firewall Capabilities and Limitations**



    * Functionality of firewalls in filtering traffic and controlling access.
    * Recognizing limitations of firewalls (not a complete security solution, can be bypassed by sophisticated attacks).

**6.3 Firewall Configuration**



    * Basic principles of firewall configuration for different network environments.
    * Importance of proper firewall configuration for effective security.

**6.4 Trusted Systems and Virtual Private Networks (VPNs)**



    * Trusted systems with enhanced security measures to resist attacks.
    * VPNs for creating secure encrypted tunnels over public networks.

<table>
  <tr>
   <td>
<strong>Lecture Number</strong>
   </td>
   <td><strong>Topic</strong>
   </td>
   <td><strong>Total Lecture Hours</strong>
   </td>
   <td><strong>Remarks</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Module 1: Introduction to Cryptography & Network Security</strong>
   </td>
   <td>4
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1.1 The Need for Security
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>1.2 Principles of Security (CIA triad)
   </td>
   <td>1.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>3-4
   </td>
   <td>1.3 Types of Attacks
   </td>
   <td>1.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Module 2: Concept and Techniques of Cryptography</strong>
   </td>
   <td>8
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>2.1 Plain Text and Cipher Text
   </td>
   <td>0.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5-6
   </td>
   <td>2.2 Substitution Techniques
   </td>
   <td>2.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>2.3 Transposition Techniques
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>8-10
   </td>
   <td>2.4 Encryption and Decryption, Symmetric and Asymmetric Key, Steganography
   </td>
   <td>4
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Module 3: Symmetric Key Algorithms
   </td>
   <td>10
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>11-12
   </td>
   <td>3.1 Algorithm Types and Modes of Operation (ECB, CBC, CFB, OFB, CTR)
   </td>
   <td>2
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>13
   </td>
   <td>3.2 Overview of Symmetric Key Cryptography
   </td>
   <td>1.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>14-15
   </td>
   <td>3.3 Data Encryption Standard (DES)
   </td>
   <td>3.5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>16-19
   </td>
   <td>3.4 Advanced Encryption Standard (AES)
   </td>
   <td>3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Module 4: Asymmetric Key Algorithms</strong>
   </td>
   <td>10
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>19
   </td>
   <td>Overview of Asymmetric Key Cryptography
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>20-21
   </td>
   <td>The RSA Algorithm (Rivest–Shamir–Adleman)
   </td>
   <td>3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>22-23
   </td>
   <td>Symmetric and Asymmetric Key Cryptography Together
   </td>
   <td>3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>24-25
   </td>
   <td>Digital Signature, Message Digest (Hashing), MD5, Secure Hash Algorithm (SHA), Hash-based Message Authentication Code (HMAC)
   </td>
   <td>3
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Module 5: Authentication </strong>
   </td>
   <td>5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>26
   </td>
   <td>Authentication Basics
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>27
   </td>
   <td>Password-Based Authentication
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>28-30
   </td>
   <td>Public Key Infrastructures (PKI)
   </td>
   <td>2
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>31-33
   </td>
   <td>Certification Authorities (CAs) and Key Distribution Centers (KDCs)
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>34-35
   </td>
   <td>Kerberos
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Module 6: Firewall </strong>
   </td>
   <td>5
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>36
   </td>
   <td>Firewall Characteristics
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>37
   </td>
   <td>Firewall Capabilities and Limitations
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>38
   </td>
   <td>Firewall Configuration
   </td>
   <td>1
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>39-40
   </td>
   <td>Trusted Systems and Virtual Private Networks (VPNs)
   </td>
   <td>2
   </td>
   <td>
   </td>
  </tr>
</table>

