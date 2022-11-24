class auth {
  constructor() {}

  signup(n, e, u, p) {
    if (this.checkPasswork(p)) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;

      let User = JSON.stringify(this);

      let Name = JSON.stringify(this.name);

      localStorage.setItem("User", User);

      localStorage.setItem("name", Name);

      alert(`namaste and Welcome
             ===>${Name} <===`);

      window.location.href = "Random.html";
    }
  }
  checkPasswork(pass) {
    let Verify = pass.length >= 8 ? true : false;
    return Verify;
  }
}

let P1 = new auth();

let Auth = () => {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("Email").value;

  const username = document.getElementById("UserName").value;

  const password = document.getElementById("Password").value;

  P1.signup(name, email, username, password);
};
