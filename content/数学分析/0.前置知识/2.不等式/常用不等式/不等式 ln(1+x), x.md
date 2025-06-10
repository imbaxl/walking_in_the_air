---
{}
---

# 1. 不等式 ln(1+x) < x 

>[!thm] 定理1：$\dfrac{x}{x+1}\leqslant \ln(1+x) \leqslant x$
>当 $x>-1,x\neq{0}$ 时，成立不等式
>$$
>\dfrac{x}{1+x}\leqslant \ln (1+x)\leqslant x.
>$$
> 当且仅当 $x=0$ 等号成立.

****

## 1.1. [[f2e480756a6744299d7d1a9e433a50e2_MD5.jpeg|示意图：不等式几何意义]]

![[f2e480756a6744299d7d1a9e433a50e2_MD5.jpeg]]


根据示意图可以有很直观的感受，该不等式自变量取值范围和[[伯努利不等式]]的 $h$ 参数都是 $h>-1$ .

*证明：*
该不等式通过 [[微分学基本定理#3. Lagrange中值定理|Lagrange中值定理]] 证明。


****

>[!cor] 推论2：
>当 $n\geqslant 2$ 时，有： $$\ln(n+1)< 1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}<1+\ln n $$

***证明思路***
- 用 $\dfrac{1+\dfrac{1}{n}}{\dfrac{1}{n}}<\ln(1+\dfrac{1}{n})<\dfrac{1}{n}$ 
	1. 变形有 $\dfrac{1}{n+1}<\ln(\dfrac{n+1}{n})<\dfrac{1}{n}$
	2. 从而有 $1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}<1+\ln(\dfrac{2}{1})+\cdots+\ln(\dfrac{n}{n-1})=1+\ln n$ 
	3. 另一侧有 $\ln(\dfrac{2}{1})+\ln(\dfrac{3}{2})+\cdots+\ln(\dfrac{n}{n-1})<1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}$
	4. 联立两式，结论成立.
***说明***
此结论在放缩 $1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}$ 时可能会有奇效.
