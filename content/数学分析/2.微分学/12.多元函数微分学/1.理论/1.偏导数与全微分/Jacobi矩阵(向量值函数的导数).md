---
{}
---

# 1. 引言

由 [[向量值函数]] 的定义，试想能否通过对标量值函数的求导平行推广到对向量值函数的求导，也就是分量函数 $f_{1},f_{2},\dots,f_{n}$ 分别对 $x_{1},x_{2},\dots,x_{m}$ 求偏导，而这个过程是的排列形式可以通过矩阵表达，于是我们定义出 **向量值函数求导**.


# 2. 定义

>[!dfn] 定义： 向量值函数 $f$ 在 $\boldsymbol{x}^0$ 点的导数（Jacobi 矩阵）
>若 $\boldsymbol{f}$  的每一个分量函数 $f_{i}(x_{1},x_{2},\dots,x_{n})$ $(i=1,2,\dots,m)$ 都在 $\boldsymbol{x}^0$ 点可偏导，就称 **向量值函数** $\boldsymbol{f}$ 在 $\boldsymbol{x}^0$ 点可导，并称矩阵
>$$(\dfrac{\partial{f_{i}}}{\partial{x_{j}}}(\boldsymbol{x}^0))_{m\times n}=\begin{pmatrix}
>\dfrac{\partial{f_{1}}}{\partial{x_{1}}}(\boldsymbol{x^0}) & \dfrac{\partial{f_{1}}}{\partial{x_{2}}}(\boldsymbol{x^0}) & \dots & \dfrac{\partial{f_{1}}}{\partial{x_{n}}}(\boldsymbol{x^0}) \\
>\dfrac{\partial{f_{2}}}{\partial{x_{1}}}(\boldsymbol{x^0}) & \dfrac{\partial{f_{2}}}{\partial{x_{2}}}(\boldsymbol{x^0}) & \dots & \dfrac{\partial{f_{2}}}{\partial{x_{n}}}(\boldsymbol{x^0}) \\
> \vdots&\vdots &&\vdots \\
\dfrac{\partial{f_{m}}}{\partial{x_{1}}}(\boldsymbol{x^0}) & \dfrac{\partial{f_{m}}}{\partial{x_{2}}}(\boldsymbol{x^0}) & \dots & \dfrac{\partial{f_{m}}}{\partial{x_{n}}}(\boldsymbol{x^0})
>\end{pmatrix} $$

# 3. 例题

求向量值函数
$$\boldsymbol{f}(x,y,z)=\begin{pmatrix}
x^3+ze^y \\
y^3+z\ln x
\end{pmatrix} $$
在 $(1,1,1)$ 点的导数.
***解***
1. 根据定义，我们有
$$\begin{align}
\dfrac{\partial{f_{i}}}{\partial{x_{j}}}_{(1,1,1)}&=\begin{pmatrix}
3x^2 & ze^y & e^y \\
\dfrac{z}{x} & 3y^2 & \ln x
\end{pmatrix}_{(1,1,1)} \\
&=\begin{pmatrix}
3 & e & e \\
1&3&0
\end{pmatrix}.
\end{align}$$


# 4. 向量值函数连续

>[!dfn] 定义： 向量值函数连续
>若 $\boldsymbol{f}$ 的每一个分量函数 $f_{i}(x_{1},x_{2},\dots,x_{n})\,(i=1,2,\dots,m)$ 的偏导数都在 $\boldsymbol{x}^0$ 点连续，即 $\boldsymbol{f}$ 的 Jacobi 矩阵的每个元素都在 $\boldsymbol{x}^0$ 点连续，则称向量值函数 $\boldsymbol{f}$ 的导数在 $\boldsymbol{x}^0$ 点连续.


# 5. 向量值函数可微

>[!dfn] 定义： 向量值函数可微
>若存在矩阵 $A$，使得在 $\boldsymbol{x}^0$ 点附近成立
>$$\begin{align}
\Delta \boldsymbol{y}&=\boldsymbol{f}(\boldsymbol{x}^0+\Delta \boldsymbol{x})-\boldsymbol{f(\boldsymbol{x}^0)}  \\
&=A\Delta \boldsymbol{x}
+o(\Delta \boldsymbol{x}).\end{align}$$
>则称 **向量值函数** $\boldsymbol{f}$ **在** $\boldsymbol{x}^0$ **点可微**.




