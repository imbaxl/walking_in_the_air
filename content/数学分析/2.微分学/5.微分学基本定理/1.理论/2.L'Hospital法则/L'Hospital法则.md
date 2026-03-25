---
tags: 数学分析
---


>[!thm] 定理：L'Hospital 法则
>设函数 $f(x)$ 和 $g(x)$ 在 $(a,a+d]$ 上可导（$d$ 是某个正常数），且 $g'(x)\neq 0$. 若此时有 $$\lim\limits_{x\to a^+}f(x)=\lim\limits_{x\to a}g(x)=0 $$ 或 $$\lim\limits_{x\to a^+}g(x)=\infty $$且 $\lim\limits_{x\to a^+}\dfrac{f'(x)}{g'(x)}$ 存在（可以是有限数或 $\infty$），则成立
>$$\lim\limits_{x\to a^+}\dfrac{f(x)}{g(x)}=\lim\limits_{x\to a^+}\dfrac{f'(x)}{g'(x)}. $$


***证明思路***
1. 在左半开区间补充定义$$f(a)=g(a)=0 $$
2. 凑成 [[Cauchy中值定理]] 的形式 $$\dfrac{f(x)}{g(x)}=\dfrac{f(x)-f(a)}{g(x)-g(a)}=\dfrac{f'(\xi)}{g'(\xi)} $$
3. 判断两侧变量趋向方向是否一致，即 $$x\to a^+:\xi\to a^+ $$
4. 于是对两侧求极限，即得结论.





