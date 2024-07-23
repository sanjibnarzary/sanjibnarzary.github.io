---
title: "Lecture 2: Web Browsers and Servers"
description: "Lecture 2: Web Browsers and Servers"
summary: ""
date: 2023-09-07T16:13:18+02:00
lastmod: 2023-09-07T16:13:18+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "lecture02-ee51430687e728ba6e68dea3359133ad"
weight: 920
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 2

Conversion time: 0.759 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β37
* Tue Jul 23 2024 00:25:37 GMT-0700 (PDT)
* Source doc: Web Browsers and Web Servers
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 2.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# **Web Browsers and Web Servers**

Web browsers and web servers are the communicating client-server programs for distributing documents and information, generally known as web data, over the Internet (**Inter**connected **Net**work).

 

Web data is marked up using HTML language for presentation and interaction with people in web browsers. Each web server uses an IP along with a port number or a domain name for its identification.

 



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.jpg "image_tooltip")


 


## **Web Browsers**

 

The communication model that the Web (WWW) and Internet follows is the client-server model. Below figure illustrates the client-server model:

 



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.jpg "image_tooltip")


In the client-server model, a client, generally a web browser sends requests to one or more servers. A request might be for a web page or to execute an application directly on the server.

Web browser is a software application which runs on the client machine and sends requests to the server. It is named after its functionality of browsing the web pages.

A web browser supports many protocols among which the most general supported protocol is HTTP (HyperText Transfer Protocol) which allows the client and server to communicate with each other.

The first web browser with a Graphical User Interface (GUI) was Mosaic developed in 1993. Popular web browsers at present are Google Chrome, Mozilla Firefox, Internet Explorer, Opera, Safari etc.

	 	


## **Web Server**

A web server is a software application which accepts requests from the clients, process them and send a response back. All the communications between a web browser and web server are carried out through HTTP.

In general, a web server monitors a port on its host machine for HTTP requests from clients, performs operations and returns responses back to the clients.

Besides the underlying hardware and operating system, all the web servers share the same characteristics. The file structure of a web server contains two separate directories known as _document root_ and _server root_.

The document root contains the web documents (web pages) that will be served as responses to the client’s requests and the server root contains the server and its support software.

Many servers allow multiple web sites to be maintained on a single computer which decreases the cost of each website and its maintenance. Such secondary hosts are known as _virtual hosts_. Some servers can serve documents that are in the _document_ _root_ of another server. Such servers are known as _proxy servers_.

Apache web server, IIS (Internet Information Services), nginx and GWS (Google Web Server) are the popular web servers. IE, Firefox and Chrome are the popular web browsers.











<!-- watermark --><div style="background-color:#FFFFFF"><p style="color:#FFFFFF; font-size: 1px">gd2md-html: xyzzy Tue Jul 23 2024</p></div>


