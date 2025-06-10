---
{}
---
#flashcards/数学分析/陈纪修/第十一章Euclid空间上的极限和连续 

# 1. Euclid空间上的基本定理

## 1.1. 证明距离满足正定性、对称性和三角不等式
?
***证明思路***
根据 [[范数]] 的定义展开即可得证.


## 1.2. 证明：若 $\mathbb{R}^n$ 中的点列 $\{{\vec{x}_{k}}\}$ 收敛，则其极限是唯一的



## 1.3. 设 $\mathbb{R}^n$ 中的点列 $\{{\vec{x}_{k}}\}$ 和 $\{{\vec{y}_{k}}\}$ 收敛，证明：对于任何实数 $\alpha,\beta$，成立等式 $$\lim\limits_{k\to \infty}(\alpha\vec{x}_{k}+\beta \vec{y}_{k})=\alpha \lim\limits_{k\to \infty}\vec{x}_{k}+\beta \lim\limits_{k\to \infty}\vec{y}_{k} $$




## 1.4. 求下列 $\mathbb{R}^2$ 中子集的内部、边界与闭包
（1）$S=\{{(x,y)\mid x>0,y\neq 0}\}$
（2）$S=\{{(x,y)\mid 0<x^2+y^2\leqslant 1}\}$
（3）$S=\{{(x,y)\mid 0<x\leqslant 1,y=\sin \dfrac{1}{x}}\}$


## 1.5. 求下列点集的全部聚点
（1）$S=\{{(-1)^k\dfrac{k}{k+1}}\mid k=1,2,\dots\}$
（2）$S=\{{(\cos \dfrac{2k\pi}{5},\sin \dfrac{2k\pi}{5})}\mid k=1,2,\dots\}$
（3）$S=\{{(x,y)\mid(x^2+y^2)(y^2-x^2-1)\leqslant 0 \}}$


## 1.6. 证明 [[聚点的充要条件]]：设 $\vec{x}$ 是点集 $S(\subset \mathbb{R}^n)$ 的聚点的充分必要条件是：存在点列 $\{{\vec{x}_{K}}\}$ 满足 $\vec{x}_{k}\in S,\vec{x}_{k}\neq \vec{x}(k=1,2,\dots)$，使得 $\lim\limits_{k\to \infty}\vec{x}_{k}=\vec{x}$
?
***证明思路***
必要性：
1. 构造存在性的点列，用 $\delta=\dfrac{1}{k}$ 作为限制条件
2. 得到点列，结论成立
充分性：
1. 反证法，假设 $\vec{x}$ 不是聚点，那么存在一个 $\vec{x}$ 的邻域是有限个数
2. 但找不到一个点列可以无限逼近 $\vec{x}$，也就是不存在这样的点列 $\{{\vec{x}_{k}}\}$ 的极限为 $\vec{x}$，与前提矛盾，故原命题成立.



## 1.7. 设 $U$ 是 $\mathbb{R}^2$ 上的开集，是否 $U$ 的每个点都是它的聚点？对于 $\mathbb{R}^2$ 中的闭集又如何呢？
?
***分析***
1. $U$ 的每个点都是聚点，这是因为 $U$ 的每个点都是内点，而聚点往往至少包含内点，并且若边界点靠近内点，那么边界点本身也是聚点，因为边界点靠近内点的一侧也有无限多个元素
2. 考虑 $\mathbb{R}^2$ 的一个闭集： $\{{(x,y)\mid x=0,y=0}\}$ 就只有一个点，所以无聚点，闭集中的点不一定是他的聚点.




## 1.8. 证明 $S \subset \mathbb{R}^n$ 的所有内点组成的点集 $S^o$ 必是开集
?
***分析***
这里容易产生概念混淆，开集的定义为：若 $S$ 中的每一个点都是它的内点，就称 $S$ 为**开集**. 也就是要证明 $S^o$ 是开集，就要证明 $S^o$ 中每个点都是它的内点
***证明思路***
1. 取 $S^o$ 的一个点 $\vec{x}$，张开 $\vec{x}$ 的邻域，因为 $\vec{x}$ 是 $S$ 的内点，所以 $\vec{x}$ 的邻域也在 $S$ 中，接下来只要证明 $\vec{x}$ 的邻域也在 $S^o$ 中即可
2. 任取 $\vec{y}\in O(\vec{x},\delta)$，有 $\vec{y}$ 的一个邻域 $O(\vec{y},\delta-|y-x|)$ 也在 $O(\vec{x},\delta)$ 之中，这意味着 $\vec{x}$ 的邻域中任取一个点 $\vec{y}$，邻域都还在 $S$ 之中，说明 $\vec{y}$ 也是 $S$ 的内点，因此 $\vec{x}$ 及其邻域 $O(x,\delta)$ 都在 $S^o$ 之中





## 1.9. 证明 $S \subset \mathbb{R}^n$ 的闭包 $\bar{S}=S \cup S'$ 必是闭集

## 1.10. 设 $E,F \subset \mathbb{R}^n$ ，若 $E$ 为开集， $F$ 为闭集，证明：$E\, \backslash F$ 为开集，$F\,\backslash E$ 为闭集
?
***证明思路***
（1）$E \,\backslash \,F=E\cap F^c$，开集交开集仍然是开集
（2）$F\,\backslash \,E=F\cap E^c$，闭集交闭集仍然是闭集

## 1.11. 证明 [[Cantor闭区域套定理]]

## 1.12. 举例说明：满足 $\lim\limits_{k\to \infty}|\vec{x}_{k+1}-\vec{x}_{k}|=0$ 的点列 $\vec{x}_{k}$ 不一定收敛

## 1.13. 设 $E,F \subset \mathbb{R}^n$ 为紧集，证明 $E \cap F$ 和 $E \cup F$ 为紧集

## 1.14. 用定义证明点集 $\{{0}\}\cup \{{\dfrac{1}{k}}\mid k=1,2,\dots\}$ 是 $R$ 中的紧集

## 1.15. 应用 [[Heine-Borel有限覆盖定理]] 直接证明：$\mathbb{R}^n$ 上有界无限点集必有聚点













# 2. 多元连续函数






# 3. 连续函数的性质











