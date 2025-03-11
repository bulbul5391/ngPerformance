# 🚀 Angular Performance Optimization  

## 💡 Why Should We Optimize Angular Performance?  
If you want to improve **Angular performance**, you must follow some key optimization techniques.  
This guide highlights some **critical** performance improvements that can make a big difference.  

### 🌿 **Branch List**  
Explore different performance optimizations by checking out specific branches:  
🔗 [forEach](https://github.com/bulbul5391/ngPerformance/tree/forEach?tab=readme-ov-file)  
🔗 [forEachPipes](https://github.com/bulbul5391/ngPerformance/tree/forEachPipes?tab=readme-ov-file)  


---

## 🔥 Key Optimization Techniques  

### 1️⃣ Use **OnPush Change Detection**  
In **`app.component.ts`**, add the following line:  

```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```
## 💡 What Happens in Console Panel?

✅ Without OnPush, forEach executes multiple times, causing unnecessary re-renders. 

✅ With OnPush, forEach executes only once, improving performance.

✅ The same optimization can also be achieved using Angular Pipes.

This ensures better efficiency and reduces redundant computations in your Angular application. 🚀
