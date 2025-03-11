# 🚀 Angular Performance Optimization

## 📌 Introduction

Improving **Angular performance** is crucial for building fast and efficient applications. This guide covers essential **performance optimization techniques** to enhance the speed and responsiveness of your Angular 11 application.

## 🌟 Why Optimize Angular Performance?

By optimizing performance, you can:

- Reduce unnecessary computations.
- Improve UI responsiveness.
- Minimize change detection overhead.
- Enhance application scalability.

---

## 🌿 **Branch List**

Explore different performance optimizations by checking out specific branches:

🔗 [forEach](https://github.com/bulbul5391/ngPerformance/tree/forEach?tab=readme-ov-file) – Optimization using **forEach**.

🔗 [forEachPipes](https://github.com/bulbul5391/ngPerformance/tree/forEachPipes?tab=readme-ov-file) – Optimization using **forEach with Pipes**.

---

## 🔥 Key Optimization Techniques

### 1️⃣ Remove **OnPush Change Detection**

By default, Angular uses **ChangeDetectionStrategy.Default**, which causes frequent re-renders. Switching to **OnPush** reduces unnecessary computations and improves performance.

📍 Modify `app.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Component Logic
}
```

## 2️⃣ **Use Angular Pipes for Performance Gains**

Angular **pipes** allow transforming data directly in the template, reducing the need for extra calculations inside the component.

Create Pipe in src/app/share folder
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forEachPipes'
})
export class ForEachPipesPipe implements PipeTransform {

  transform(symbol: unknown, ...args: unknown[]): unknown {
    console.log("function calling from pipes");
    if(symbol == 'H')
    {
      return 'Height';
    }else if(symbol == 'W')
    {
      return 'Weight';
    }else{
      return 'Null'
    }
  }

}
```

📍 Modify `app.component.html`:

```html
<ol>
  <li *ngFor="let data of ELEMENT_DATA">
    {{ data.symbol | forEachPipes }} : {{ data.weight }}
  </li>
</ol>
```

This leverages **pure pipes**, which execute only when input values change, leading to **better performance**.

---

### ✅ What Happens in Console Panel?

- **Without Pipe:** `forEach` executes multiple times, causing redundant computations.
- **With Pipe:** `forEach` runs only once, improving efficiency.
---

## 📜 Conclusion

By applying these **Angular performance optimizations**, your application will: ✅ Render faster. ✅ Reduce CPU load. ✅ Improve overall user experience.

Explore the GitHub branches above for practical implementations of these optimizations. 🚀

### 📌 Want to contribute?

Feel free to fork the repository, open issues, or submit pull requests to improve Angular performance further!

**Happy coding!** 🎯

