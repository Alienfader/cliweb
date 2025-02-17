---
title: "IntelliJ based IDEs Vulnerability"
date: "2024-06-10"
updated: "2024-06-15"
excerpt: "A critical security vulnerability in the JetBrains GitHub plugin affects IntelliJ-based IDEs. Learn the steps needed to secure your development environment."
categories:
  - News
  - Urgent
tags:
  - news
  - security
  - IntelliJ
  - vulnerability
license: "CC BY 4.0"
author: "Alienfader"
---

# IntelliJ based IDEs Vulnerability

*Posted Jun 10, 2024*  
*Updated Jun 15, 2024*  
*By [Alienfader](https://twitter.com/Alienfader)*  
*1 min read (338 words)*

## Urgent Security Update: JetBrains GitHub Plugin in IntelliJ-based IDEs

Greetings, code warriors! Today, we dive into an important update that demands our attention — a security vulnerability in the JetBrains GitHub plugin that affects all IntelliJ-based IDEs from version 2023.1 onwards. Let’s unpack the details and understand what actions are necessary to secure our development environments.

## The Discovery

On May 29, 2024, a security flaw was reported in the JetBrains GitHub plugin, specifically impacting how pull requests are handled within IntelliJ-based IDEs. This issue, identified as **CVE-2024-37051**, could potentially expose access tokens to third-party hosts when malicious content is processed through pull requests.

## Immediate Action and Fixes

The JetBrains team responded swiftly to this discovery, not only starting work on a resolution but also collaborating with GitHub for effective mitigation. To address this, updates have been rolled out across various IntelliJ-based IDEs, ensuring the security of your development setup:

### Updated Versions Include:

- **Aqua**: 2024.1.2
- **CLion**: 2023.1.7, 2023.2.4, 2023.3.5, 2024.1.3, 2024.2 EAP2
- **DataGrip**: 2024.1.4
- **DataSpell**: 2023.1.6, 2023.2.7, 2023.3.6, 2024.1.2
- **GoLand**: 2023.1.6, 2023.2.7, 2023.3.7, 2024.1.3, 2024.2 EAP3
- *(And many more, covering all IntelliJ-based IDEs)*

## What You Need to Do

### Update Your IDE

First and foremost, update your IDE to the latest patched version to eliminate any risk associated with this vulnerability.

### Revoke and Refresh Access Tokens

If you’ve utilized GitHub pull request functionality within the IDE, take the following steps:

1. **OAuth Integration Settings:**
   - Navigate to **Applications → Authorized OAuth Apps**.
   - Revoke access for the **JetBrains IDE Integration** application.
2. **Personal Access Token Settings:**
   - Visit the **Tokens** page.
   - Delete any tokens issued for the plugin, especially those named `IntelliJ IDEA GitHub integration plugin` or any custom names you might be using.

Remember, post-revocation, you’ll need to reconfigure the plugin to restore functionality to all its features, including Git operations.

## Wrapping Up

While it’s unfortunate that such vulnerabilities emerge, the proactive response by JetBrains and the community’s swift adoption of these fixes highlight the strength of our collective cybersecurity efforts. Update, secure, and continue coding safely!

As I always say, “Hack, Sleep, Repeat”
