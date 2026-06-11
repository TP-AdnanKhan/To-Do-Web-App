# 📝 To-Do-Web-App

A clean, easy-to-use To-Do list web application that I built from scratch. This project handles daily tasks and features a custom-built Light and Dark mode toggle switch.

🔗 **[Live Interactive Demo](https://tp-adnankhan.github.io/To-Do-Web-App/)**

---

## 🚀 Current Features

* **Dynamic Task Management:** You can add new tasks instantly, click to edit their text using an inline prompt, and delete them when you're done.
* **Task State Tracking:** Checkboxes let you cross off completed tasks visually with a line-through styling effect.
* **Custom Theme Engine:** A fully working Light and Dark mode switch that instantly changes the interface colors smoothly when clicked.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 🎓 What I Learned From This Project

* **How JavaScript Logic Works:** I learned how to use JavaScript to capture button clicks, update the task container in real-time, and manipulate strings accurately.
* **CSS Layouts and Alignment:** I practiced using CSS styling to design a clean grid for the user interface and learned how to center elements neatly on a web page.
* **Mastering Event Delegation:** I discovered that standard event listeners don't naturally track newly added items. I solved this by targeting parent containers and using properties like `e.target.matches()` to capture events on dynamic list rows.
* **Building Consistency with Git & Hosting:** This was my second time hosting a project on GitHub Pages. It really helped me lock down the Git workflow and get comfortable deploying live websites for my portfolio.

## 🚧 Next Steps & Future Updates (Incomplete Parts)

I am currently treating this project as a working prototype! Here are the features I am planning to code next as I continue learning frontend development:
* **Live Search Logic:** Connect the navigation search bar to JavaScript so users can type words to filter through their list items in real-time.
* **Dropdown Filtering:** Upgrade the status dropdown menu ("All", "Complete", "Incomplete") so it dynamically hides or shows entire rows and their layout separator lines based on what is checked.
