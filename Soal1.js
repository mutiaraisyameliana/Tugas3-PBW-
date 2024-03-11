function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      console.log(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
  }
  
  fibonacci(10); // Mencetak 10 bilangan Fibonacci pertama
  