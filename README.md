
# Team CICA

---

## How did we split the work?

* Brainstormed the inital layout of the site together
* Talked about what features we wanted
* Split into pairs
* Chose different sections to work on i.e. Nav bar, contact form
* Checked in periodically to assess progress


---


### What we are proud of

![](https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif)

---

![](https://i.imgur.com/WMyDiY9.png)

---

### What we struggled with
![](https://media.giphy.com/media/Z0vwMJLx0L4dy/giphy.gif)


---

```javascript=
const allInput = document.querySelectorAll('input')

for (let i = 0; i < allInput.length; i++){
        if (allInput[i].value !== '') {
          submitArray.push(allInput[i]);
}
```

```javascript=
const allInput = document.querySelectorAll('input')

for (let i = 0; i < allInput.length; i++){
        if (allInput[i].innerText !== '') {
          submitArray.push(allInput[i]);
}
```

---

![](https://media.giphy.com/media/ToMjGpjUl5ufFGlrk2Y/giphy.gif)

---


### What we're proud of

* Back to top button
* Use of CSS grid and layout of About us page

![](https://media.giphy.com/media/X9QvNIWY6iCq1Qubff/giphy.gif)

---

![](https://i.imgur.com/oEdWohL.png)


---

```javascript=
function btnAppear() {
  if (window.pageYOffset > 500) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
}
```

---

![](https://i.imgur.com/0StCn4F.png)

## CSS grid
```css=


fieldset.about {
    border-radius: 10px;
    margin: 7%;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 1.5rem;
    border: 2px solid hsl(0, 0%, 50%);
}
```

---

### What we struggled with

* CSS attributes
* Using Git

![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMUTHsF_j94nmPvQY-da22Xt8t8hj4aGerAo5sIUXBLO582DFG)


---

![](https://i.imgur.com/LYdzEgc.png)

---

```css=
.ako:hover {
    background-color:#94CE8E;
}

.chloe:hover {
    background-color:#a8d3da;
}

.ina:hover {
    background-color:#f5cab3;
}

.campbell:hover {
    background-color:#f3ecb8;
}
```


---

![](https://pics.me.me/thumb_git-repo-git-pull-git-merge-conflict-gilt-62023821.png)

--- 