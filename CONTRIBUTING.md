# Contributing to GitCardz

👋 Thanks for wanting to contribute! This project is a community wall of profile cards.

## How to add your card
1. Fork this repository (click the "Fork" button at the top-right of this page).
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/gitcardz.git
   cd gitcardz
   ```
3. Create a new branch for your card (this keeps main clean):
    ```bash
    git checkout -b your-repository-name
    ```
4. Open data/contributors.json in your editor.

5. Add a new object to the JSON array with your info, for example:
    ```json
        {
            "username": "your-github-username", // make sure that it is your GitHub "username"
            "name": "your-github-name",
            "avatar": "your-github-avatar-img-link", // rightclick you profile image, then select "Open image in new tab"
            "bio": "short bio to describe yourself",
            "tags": ["tags", "you", "want", "to be", "Known for"],
            "containerClasses": "your custom tailwindCSS"
        }
    ```
    💡 Note: containerClasses is optional. If you don’t provide one, a default style will be used.

6. Save the file and commit your changes:
    ```bash
    git add data/contributors.json
    git commit -m "Add card for @your-username"
    ```

7. Push your branch to your fork:
    ```bash
    git push origin your-repository-name
    ```

8. Go to your fork on GitHub and click “New Pull Request” to submit it.

## All set!

🎉 That’s it — you’ve added your card to GitCardz!  
Once I reviewed your pull request and merged it to the ```main``` branch, your profile will appear on the site.