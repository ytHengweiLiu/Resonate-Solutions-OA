# Q1
This system generates a compact, human-readable short code (less or equal to 9 characters) that encodes three key pieces of information: the store ID, the transaction ID, and the date of the transaction (represented as days since Jan 1, 2000). These values are combined into a 12-digit string and then converted to a base-17 to base-36 encoded string to shorten it. When decoding, the process is reversed, split into its original segments, and the date is reconstructed. This allows fast, tamper-resistant encoding and reliable recovery of original data.

# Q2 Features

This project includes the following key features:

## 🔍 Search Bar (Find Bar)
- Allows users to search contacts by **name**.
- The contact list updates in real-time as the user types.
- Enables quick access to specific contact information.

## ↕️ Sorting Options
- Contacts are automatically **sorted alphabetically** by name upon data load.
- Enhances usability and ensures consistency in display.

## 📝 Detailed Information on Card Click
- Clicking on a contact card reveals **comprehensive details** about the contact.
- The detailed view includes:
  - **Name**
  - **Email**
  - **Phone**
  - **Username**
  - **Website**
  - **Company Name** and **Catchphrase**
  - **Full Address** (Suite, Street, City, Zipcode)
- A **Back** button is provided to return to the contact list.

---

These features provide a clean and interactive user interface for browsing and exploring contact data.