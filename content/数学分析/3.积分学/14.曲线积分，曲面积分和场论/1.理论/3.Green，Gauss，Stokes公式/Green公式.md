---
tags: 数学分析
---


| 排序 | 内容 |
| ------- | ------- |
|         |         |


****

简单定义了 **单连通区域（任意封闭曲线都能连续收缩成区域中一点）** 和 **复连通区域**。Green 公式原理是建立在单连通区域，如果对复连通区域，只要是有限个“洞”的复连通区域，也可以割开分别积分.

同时，Green 公式也是 Newton-Leibniz 公式的推广。

>[!thm] 定理1（Green 公式）
>设 $D$ 为平面上由光滑或分段光滑的简单闭曲线所围的单连通区域。如果函数 $P(x,y)$，$Q(x,y)$ 在 $D$ 上具有连续偏导数，那么
>$$
>\int_{\partial D} P \ \mathrm{d}x + Q \ \mathrm{d}y = \iint_{D} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \ \mathrm{d}x\ \mathrm{d}y,
>$$
其中 $\partial D$ 取正向，即诱导定向^[诱导一词在此没有什么额外含义，只是表示正向，反向的话就是反向定向]。


<font color="#0070c0">证明框架</font>：在做功的背景下讨论，给定一个矩形，原本是逆时针走一圈，分成了两个矩形逆时针走一圈，再分一次就是四个矩形，而在矩形内部的做功会相互抵消，从而说明了无限地分下去，做的总功和原来是一样的。这说明我们可以把二重积分当中对被积区域做划分小矩形的手法同样用在封闭的曲线积分，也就是第二类曲线积分可以化作二重积分进行计算。


<font color="#0070c0">证明（左证到右）</font>
1. 设有单连通区域上的第二类曲线积分 $\displaystyle\int_{\partial D} P \ \mathrm{d}x + Q \ \mathrm{d}y$
2. 用微元法，取区域 $\partial D$ 中任意小矩形（$[x_i,x_{i}+\Delta x]\times[y_{i},y_{i}+\Delta y]$）， $\overset{\frown}{AB},\overset{\frown}{BC},\overset{\frown}{CD},\overset{\frown}{DA}$（正好一圈）
3. $\overset{\frown}{AB},\overset{\frown}{CD}$ 区域 $\ \mathrm{d}y=0$，从而原式等于 $\displaystyle\int_{x_{i}}^{x_{i}+\Delta x} P(x,y_{i})\ \mathrm{d}x-\displaystyle\int_{x_{i}}^{x_{i}+\Delta x} P(x,y_{i}+\Delta y)\ \mathrm{d}x$
	-  $=\displaystyle\int_{x_{i}}^{x_{i}+\Delta x}[P(x,y_{i})-P(x,y_{i}+\Delta y)]\ \mathrm{d}x$
	- $=\displaystyle\int_{x_{i}}^{x_{i}+\Delta x}\left(\displaystyle\int_{y_{i}+\Delta y}^{y_{i}} \dfrac{\partial{P(x,y)}}{\partial{y}}\\ \mathrm{d}y \right) \ \mathrm{d}x=\displaystyle\int_{x_{i}}^{x_{i}+\Delta x}\left(\displaystyle\int_{y_{i}+}^{y_{i}+\Delta y} -\dfrac{\partial{P(x,y)}}{\partial{y}}\\ \mathrm{d}y \right) \ \mathrm{d}x$
4. $\overset{\frown}{BC},\overset{\frown}{DA}$ 区域 $\ \mathrm{d}x=0$，从而原式等于 $\displaystyle\int_{y_{i}}^{y_{i}+\Delta y} Q(x_{i}+\Delta x,y)\ \mathrm{d}y-\displaystyle\int_{y_{i}}^{y_{i}+\Delta y} Q(x_{i},y)\ \mathrm{d}y$
	- $=\displaystyle\int_{y_{i}}^{y_{i}+\Delta y} [Q(x_{i}+\Delta x,y) -Q(x_{i},y) ]\ \mathrm{d}y$
	- $=\displaystyle\int_{y_{i}}^{y_{i}+\Delta y}\left(\displaystyle\int_{x_{i}}^{x_{i}+\Delta x} \dfrac{\partial{Q(x,y)}}{\partial{x}}\  \mathrm{d}x \right) \   \mathrm{d}y$
5. 




