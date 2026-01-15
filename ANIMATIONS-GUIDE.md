# دليل التأثيرات الحركية للكروت

## ✨ التأثيرات المطبقة على كروت المشاريع السبعة

### 🎯 تأثيرات الظهور (Entrance Animations)

كل كارت من الكروت السبعة يظهر بطريقة مختلفة عند السكرول:

1. **الكارت الأول**: يأتي من اليسار مع دوران -15 درجة
2. **الكارت الثاني**: يأتي من الأسفل مباشرة
3. **الكارت الثالث**: يأتي من اليمين مع دوران +15 درجة
4. **الكارت الرابع**: يأتي من اليسار السفلي
5. **الكارت الخامس**: يأتي من الأسفل مع دوران خفيف
6. **الكارت السادس**: يأتي من اليمين السفلي
7. **الكارت السابع**: يأتي من الأسفل مع دوران عكسي

### 🎨 التأثيرات الإضافية

- **Shimmer Effect**: تأثير لمعان يمر على الكارت عند ظهوره لأول مرة
- **Scale Animation**: كل كارت يبدأ صغير ويكبر تدريجياً
- **Staggered Delays**: تأخير زمني متدرج (0.1s - 0.7s)

### 🖱️ تأثيرات الـ Hover

عند تمرير الماوس على الكارت:

- **Float Animation**: حركة طفو مستمرة (يرتفع وينزل)
- **Rotation**: الكروت الفردية تدور يسار والزوجية تدور يمين
- **Glow Border**: حدود متوهجة ومتحركة
- **Brightness**: زيادة في السطوع
- **Scale**: تكبير خفيف (1.03x)
- **Shadow**: ظل ديناميكي متحرك

### 📁 الملفات المعدلة

1. **css/animations.css**: يحتوي على جميع التأثيرات الحركية
2. **css/main.css**: تم تنظيفه من التأثيرات المتضاربة
3. **js/animations.js**: يحتوي على IntersectionObserver لتفعيل التأثيرات
4. **js/main.js**: يقوم بإنشاء الكروت ديناميكياً
5. **index.html**: يستخدم `#allProjectsGrid` للكروت السبعة

### 🔧 كيفية عمل التأثيرات

```css
/* الكروت تبدأ مخفية */
#allProjectsGrid .project-card {
  opacity: 0;
  transform: translateX(-150px) translateY(80px) rotate(-15deg) scale(0.7);
}

/* عند السكرول تظهر */
#allProjectsGrid .project-card.active {
  opacity: 1;
  transform: translateX(0) translateY(0) rotate(0deg) scale(1);
}

/* عند الـ Hover */
#allProjectsGrid .project-card.active:hover {
  transform: translateY(-15px) rotate(-2deg) scale(1.03);
  animation: cardFloat 3s ease-in-out infinite;
}
```

### 🔍 آلية عمل IntersectionObserver

```javascript
// في animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // يضيف كلاس active
    }
  });
}, {
  threshold: 0.15, // يظهر عندما 15% من الكارت يكون مرئي
  rootMargin: '0px 0px -100px 0px' // يبدأ قبل 100px من أسفل الشاشة
});

// يراقب جميع الكروت
const projectCards = document.querySelectorAll('#allProjectsGrid .project-card');
projectCards.forEach(card => observer.observe(card));
```

### 🔄 MutationObserver للكروت الديناميكية

```javascript
// يراقب إضافة كروت جديدة (عند تغيير اللغة أو الفلتر)
const gridObserver = new MutationObserver(() => {
  const projectCards = document.querySelectorAll('#allProjectsGrid .project-card');
  projectCards.forEach(card => observer.observe(card));
});

gridObserver.observe(grid, { childList: true, subtree: true });
```

### ✅ التأكد من عدم التضارب

- ✅ تم إزالة جميع التأثيرات المتضاربة من `main.css`
- ✅ تم فصل تأثيرات صفحة Index عن باقي الصفحات
- ✅ استخدام selectors محددة (`#allProjectsGrid .project-card`)
- ✅ IntersectionObserver يعمل مع الكروت الديناميكية
- ✅ MutationObserver يراقب إضافة كروت جديدة
- ✅ التأثيرات تعمل مع جميع الـ grids (allProjectsGrid, ecommerceGrid, serviceGrid)

### 🎬 النتيجة النهائية

الكروت السبعة الآن تظهر بشكل احترافي جداً مع:
- ✨ حركات دخول مميزة من اتجاهات مختلفة
- 🌟 تأثير لمعان عند الظهور
- 🎨 حركات hover سلسة ومتنوعة
- 💫 تأثيرات توهج وظلال ديناميكية
- 🔄 حركة طفو مستمرة عند الـ hover
- 🎯 تفعيل تلقائي عند السكرول
- 🔄 دعم الكروت الديناميكية

### 🐛 حل المشاكل

إذا لم تظهر الكروت:
1. تأكد من أن `animations.js` يتم تحميله قبل `main.js`
2. افتح Console وتأكد من عدم وجود أخطاء JavaScript
3. تأكد من أن الكروت موجودة في `#allProjectsGrid`
4. تأكد من أن IntersectionObserver مدعوم في المتصفح

---

**ملاحظة**: جميع التأثيرات تستخدم `cubic-bezier(0.34, 1.56, 0.64, 1)` للحصول على حركة bounce احترافية.

