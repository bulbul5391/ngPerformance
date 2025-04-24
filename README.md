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

🔗 [trackBy](https://github.com/bulbul5391/ngPerformance/tree/trackBy?tab=readme-ov-file) – Optimization using **trackBy**.

---

## 🔄 TrackBy Optimization in Angular

Using Angular’s ***ngFor** directive with **trackBy** to improve rendering performance by avoiding unnecessary DOM manipulations.

### 🧠 Why trackBy?**

When using ***ngFor**, Angular re-renders the entire list by default—even if only one item changes. The **trackBy** function tells Angular how to uniquely identify items, so it only updates what’s necessary.

🧪 Example Use Case

📍 File `track-by-elements.component.html`:

```typescript
<div class="container text-center">
    <div class="row mt-5">
        <div class="col-sm-6">

            <button (click)="updateData()" type="button" class="btn btn-primary mx-1">Update Data</button> 
            <button (click)="ngOnInit()" type="button" class="btn btn-success mx-1">Reset Data</button>
            
            <table class="table table-hover table-primary mt-2">
                <tbody>
                    <tr *ngFor="let data of ELEMENT_DATA; trackBy:trackByElement">
                        <td>{{data.name}}</td>
                        <td>{{data.weight}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-6">
            {{ELEMENT_DATA|json}}
        </div>
    </div>
</div>
```
📍 File `track-by-elements.component.ts`:

```typescript
  trackByElement(index:number, item:TrackByElements): number{
    return item.weight
  }
```

### ✅ What Happens in Browser Elements?

- **Without trackBy:** When you click the **Update Data** button, Angular checks every item in the list and re-renders all of them, even if only one item changed. This can slow  down if the list is big.

- **With trackBy:** When you use **trackBy**, Angular knows which item changed. So it only re-renders that one item instead of the whole list. This makes your app faster and more efficient.
---

## 📜 Conclusion

By applying these **Angular performance optimizations**, your application will: ✅ Render faster. ✅ Reduce CPU load. ✅ Improve overall user experience.

Explore the GitHub branches above for practical implementations of these optimizations. 🚀

### 📌 Want to contribute?

Feel free to fork the repository, open issues, or submit pull requests to improve Angular performance further!

**Happy coding!** 🎯

