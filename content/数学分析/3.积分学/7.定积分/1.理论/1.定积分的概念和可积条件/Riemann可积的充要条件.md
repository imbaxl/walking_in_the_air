---
{}
---


>[!thm] 定理1（上下和角度）
>有界函数 $f(x)$ 在 $[a,b]$ 可积的充分必要条件是，对于任意划分 $P$，当 $\lambda=\displaystyle\max_{1\leqslant i\leqslant n}(\Delta x_{i})\to 0$ 时，Darboux 上和 与 Darboux 下和 的极限相等，即成立 $$\lim\limits_{\lambda\to 0}\bar{S}(P)=L=l=\lim\limits_{\lambda\to 0}\underline{S}(P). $$

***证明思路***
必要性：
1. 展开证明 **Darboux上和** 极限 $=$ **Riemann和** 极限 $=$ **Darboux下和** 极限
2. 找到一个放缩使得 **Darboux上和** 极限 与 **Riemann和** 极限的绝对值小于 $\epsilon$.
3. $\bigg| \bar{S}(P)-I\bigg|=\bigg|\bar{S}-\sum\limits_{i=1}^{n}f(\xi_{i})\Delta x_{i}\bigg|+\bigg|\sum\limits_{i=1}^{n}f(\xi_{i})\Delta x_{i}-I\bigg|$，对拆分的两个绝对值证明小于 $\dfrac{\epsilon}{2}$
4. 右侧由可积条件直接给出，左侧需要借用 [[数学分析/1.极限论/1.数列极限/1.理论/3.收敛准则/确界原理]]，利用 $M_{i}$ 是上确界的性质，构造出不等式 $0 \leqslant M_{i}-f(\xi_{i})<\dfrac{\epsilon}{2(b-a)}$.
充分性：
1. 若有 Darboux上下和 的极限存在且相等，则存在一种划分 $P$ 中，有 Riemann和 满足如下不等式
$$\underline{S}(P)\leqslant \sum\limits_{i=1}^{n} f(\xi_{i} )\Delta x_{i}\leqslant \bar{S}(P) $$
2. 对上式求极限即可得到定积分.










>[!thm] 定理2（上下积分角度）
>有界函数 $f(x)$ 在 $[a,b]$ 可积的充分必要条件是，$f(x)$ 在 $[a,b]$ 的上积分 $s$ 等于下积分 $S$.


>[!thm] 定理3（振幅角度）
>有界函数 $f(x)$ 在 $[a,b]$ 可积的充分必要条件是，对任意划分，当 $\lambda=\displaystyle\max_{1\leqslant i\leqslant n}(\Delta x_{i})\to 0$ 时，有 $$\lim\limits_{\lambda\to 0}\sum\limits_{i=1}^{n}\omega_{i}\Delta x_{i}=0.$$
>
>![[c308c57d7d862e5d6e86b84c795756b7_MD5.jpeg]]



>[!thm] 定理4（实变角度）
>有界函数 $f(x)$ 在 $[a,b]$ 可积的充分必要条件是，$f(x)$ 在 $[a,b]$ 几乎处处连续.



根据以上定理，可以有2个推论：[[Riemann可积的2个推论]]
