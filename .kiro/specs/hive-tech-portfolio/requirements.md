# Requirements Document

## Introduction

Portfolio احترافي ثنائي اللغة (عربي/إنجليزي) لشركة Hive Tech AI يعرض 8 مشاريع موزعة على قسمين رئيسيين: E-Commerce Systems و Service Systems. المشروع يهدف لعرض قدرات الشركة من خلال Case Studies احترافية مع تصميم تفاعلي يخطف العين.

## Glossary

- **Portfolio_System**: النظام الكامل لعرض المشاريع
- **Project_Card**: بطاقة عرض المشروع في الصفحة الرئيسية
- **Project_Detail_Page**: صفحة تفصيلية لكل مشروع
- **Language_Switcher**: زر تبديل اللغة بين العربية والإنجليزية
- **Navigation_Menu**: قائمة التنقل الرئيسية
- **Hero_Section**: قسم البطولة في الصفحة الرئيسية
- **Filter_System**: نظام تصفية المشاريع حسب النوع

## Requirements

### Requirement 1: عرض المشاريع في الصفحة الرئيسية

**User Story:** كمستخدم، أريد رؤية جميع المشاريع في صفحة واحدة منظمة، حتى أتمكن من استكشاف قدرات Hive Tech AI بسرعة.

#### Acceptance Criteria

1. WHEN المستخدم يزور الصفحة الرئيسية، THEN THE Portfolio_System SHALL عرض 8 مشاريع في Grid تفاعلي
2. WHEN المستخدم يمرر الماوس على Project_Card، THEN THE Portfolio_System SHALL عرض تأثيرات Hover احترافية
3. WHEN المستخدم ينزل في الصفحة، THEN THE Portfolio_System SHALL عرض Animations للعناصر عند ظهورها
4. THE Portfolio_System SHALL تقسيم المشاريع إلى قسمين: E-Commerce Systems (3 مشاريع) و Service Systems (5 مشاريع)

### Requirement 2: صفحات تفصيلية للمشاريع

**User Story:** كمستخدم، أريد الضغط على مشروع معين لرؤية تفاصيله الكاملة، حتى أفهم الحل المقدم بشكل أعمق.

#### Acceptance Criteria

1. WHEN المستخدم يضغط على Project_Card، THEN THE Portfolio_System SHALL فتح Project_Detail_Page في صفحة جديدة
2. THE Project_Detail_Page SHALL عرض: اسم المشروع، وصف المشكلة، الحل المقدم، المميزات، الفئة المستهدفة، نوع النظام
3. THE Project_Detail_Page SHALL تحتوي على صور توضيحية للمشروع
4. THE Project_Detail_Page SHALL تحتوي على زر العودة للصفحة الرئيسية

### Requirement 3: دعم اللغتين العربية والإنجليزية

**User Story:** كمستخدم، أريد تبديل اللغة بين العربية والإنجليزية، حتى أتمكن من قراءة المحتوى بلغتي المفضلة.

#### Acceptance Criteria

1. THE Portfolio_System SHALL عرض Language_Switcher في Header
2. WHEN المستخدم يضغط على Language_Switcher، THEN THE Portfolio_System SHALL تبديل جميع النصوص للغة المختارة
3. WHEN اللغة العربية مفعلة، THEN THE Portfolio_System SHALL عرض النصوص من اليمين لليسار (RTL)
4. THE Portfolio_System SHALL حفظ اختيار اللغة في Local Storage

### Requirement 4: Header و Navigation

**User Story:** كمستخدم، أريد رؤية Header احترافي مع Logo والقائمة، حتى أتمكن من التنقل بسهولة.

#### Acceptance Criteria

1. THE Portfolio_System SHALL عرض Header ثابت في أعلى الصفحة
2. THE Header SHALL يحتوي على Logo الشركة من الملفات المرفقة
3. THE Navigation_Menu SHALL يحتوي على: Home, Projects, About, Contact
4. WHEN المستخدم ينزل في الصفحة، THEN THE Header SHALL يتغير لونه أو يصبح شفاف

### Requirement 5: Footer مع معلومات الشركة

**User Story:** كمستخدم، أريد رؤية معلومات الشركة في Footer، حتى أتمكن من التواصل أو معرفة المزيد.

#### Acceptance Criteria

1. THE Portfolio_System SHALL عرض Footer في نهاية كل صفحة
2. THE Footer SHALL يحتوي على: معلومات الشركة، روابط التواصل الاجتماعي، حقوق النشر
3. THE Footer SHALL يستخدم نفس الألوان المستخرجة من الهوية البصرية

### Requirement 6: تصميم تفاعلي واحترافي

**User Story:** كمستخدم، أريد تجربة تصفح سلسة مع تأثيرات بصرية جذابة، حتى أشعر بالاحترافية.

#### Acceptance Criteria

1. THE Portfolio_System SHALL استخدام Transitions سلسة لجميع التفاعلات
2. THE Portfolio_System SHALL عرض Animations عند تحميل الصفحة
3. THE Portfolio_System SHALL استخدام Parallax Effects في Hero_Section
4. THE Portfolio_System SHALL يكون Responsive على جميع الأجهزة (Desktop, Tablet, Mobile)

### Requirement 7: استخراج الألوان من الهوية البصرية

**User Story:** كمطور، أريد استخدام ألوان الشركة الرسمية، حتى يكون التصميم متناسق مع الهوية البصرية.

#### Acceptance Criteria

1. THE Portfolio_System SHALL استخراج الألوان الرئيسية من file.jpg و Group-2.png
2. THE Portfolio_System SHALL استخدام هذه الألوان في: Buttons, Headers, Cards, Backgrounds
3. THE Portfolio_System SHALL الحفاظ على تباين جيد للقراءة

### Requirement 8: محتوى المشاريع الثمانية

**User Story:** كمستخدم، أريد رؤية تفاصيل واضحة لكل مشروع، حتى أفهم نوع الحلول التي تقدمها Hive Tech AI.

#### Acceptance Criteria

1. THE Portfolio_System SHALL عرض 3 مشاريع E-Commerce: Fashion, Electronics, Cosmetics
2. THE Portfolio_System SHALL عرض 5 مشاريع Service Systems: Real Estate, Beauty Salon, Import/Export, Restaurant, Cars Maintenance
3. WHEN المستخدم يشاهد مشروع، THEN THE Portfolio_System SHALL عرض: المشكلة، الحل، المميزات، الفئة المستهدفة، نوع النظام
4. THE Portfolio_System SHALL استخدام صور Placeholder قابلة للاستبدال

### Requirement 9: نظام تصفية المشاريع

**User Story:** كمستخدم، أريد تصفية المشاريع حسب النوع، حتى أركز على القطاع الذي يهمني.

#### Acceptance Criteria

1. THE Portfolio_System SHALL عرض Filter_System في الصفحة الرئيسية
2. THE Filter_System SHALL يحتوي على خيارات: All, E-Commerce, Service Systems
3. WHEN المستخدم يختار فلتر، THEN THE Portfolio_System SHALL عرض المشاريع المطابقة فقط مع Animation
4. THE Portfolio_System SHALL عرض عدد المشاريع لكل فئة
