# 🎉 Festivite

**Festivite** is a dynamic and user-friendly web project that allows users to create beautiful and personalized party invitations in a few simple steps. Whether it's a birthday, wedding, graduation, or casual get-together, Festivite makes the invitation process creative, fun, and accessible for everyone.

🌐 **Live Demo**: [https://gobstech.github.io/festivite-rocketseat/](https://gobstech.github.io/festivite-rocketseat/)

---

## 📌 Features

- 🌟 Clean, minimal, and modern design.
- ✍️ Form to customize invite details (name, date, time, location, and message).
- 🎨 Elegant color palette focused on usability and festivity.
- 📱 Fully responsive layout.
- ⚡ Built with semantic HTML, CSS, and JavaScript for accessibility and performance.

---

## 🛠️ Project Structure

```
festivite-rocketseat/
│
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── script.js           # JavaScript functionality
└── assets/             # Images and icons used in the project
```

---

## 🧱 Building the Website

The development was centered around creating a smooth and inviting user experience with a clear visual hierarchy.

### 1. **Layout & Structure**

- The page follows a **single-page layout** model.
- It uses a **header** with a project title, followed by a **form section** for inputs, and finally a **preview section** showing the generated invitation.
- **Semantic HTML** tags like `<section>`, `<form>`, and `<footer>` were used to improve structure and accessibility.

### 2. **Form Section**

The heart of the application is the invitation form. It includes the following fields:

- **Your Name** (`input[type="text"]`)
- **Event Name** (`input[type="text"]`)
- **Date & Time** (`input[type="datetime-local"]`)
- **Location** (`input[type="text"]`)
- **Personal Message** (`textarea`)

Each input is associated with a label for clarity and accessibility. JavaScript is used to update the invitation preview in real time as the user types or changes values.

Validation is handled with simple HTML5 validations (`required`, `type="datetime-local"`, etc.), ensuring ease of use without over-complicating the form.

### 3. **Invite Preview**

As the user fills in the form, a **real-time preview** displays their customized invite using template literals in JavaScript. This allows users to see what their final invitation will look like instantly.

---

## 🎨 Color Palette

The Festivite color palette was designed to be festive yet elegant:

| Color         | Usage                        | Hex       |
| ------------- | ---------------------------- | --------- |
| Soft Peach    | Background / Cards           | `#FFF1E6` |
| Warm Coral    | Call-to-Action / Highlights  | `#FF6B6B` |
| Midnight Blue | Text / Headings              | `#2E2E3A` |
| White         | Form background / Clean look | `#FFFFFF` |
| Gray Shadows  | Input borders / Subtle text  | `#DADADA` |

This palette was chosen to evoke warmth and celebration, while maintaining contrast and readability across devices.

---

## 💻 Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Flexbox for layout, responsive media queries
- **JavaScript (Vanilla)** – DOM manipulation and form interactivity

---

## 📱 Responsiveness

The site was built with **mobile-first principles**, ensuring it looks great on:

- Mobile devices
- Tablets
- Desktop screens

Media queries adapt font sizes, spacing, and layout elements for optimal usability.

---

## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/gobstech/festivite-rocketseat.git
   ```
2. Open `index.html` in your browser.

No build step or dependencies required — it's fully static and ready to deploy.

---

## 📌 Future Improvements

- 🎨 Add template themes for different occasions.
- 📤 Export invitation as image or downloadable file.
- 📧 Integration with email services for direct sending.
- 💬 Multilingual support (e.g. EN/PT).

---

## 🤝 Acknowledgments

- Project inspired by **Rocketseat’s** challenges and UI-focused learning experience.
- Icons and fonts from **Google Fonts** and **Heroicons**.

---

## 🧑‍💻 Author

Made with ❤️ by [@gobstech](https://github.com/gobstech)
