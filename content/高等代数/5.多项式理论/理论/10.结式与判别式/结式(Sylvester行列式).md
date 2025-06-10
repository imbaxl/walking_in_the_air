---
{}
---

>[!dfn] 定义： 结式(Sylvester行列式)
>设$$ f(x)=a_{0}x^n+a_{1}x^{n-1}+\dots+a_{n}, $$
>$$ g(x)=b_{0}x^n+b_{1}x^{n-1}+\dots+b_{n}.$$定义以下 $m+n$ 阶行列式：
>$$
>R(f,g)=\begin{vmatrix}
a_{0} & a_{1} & a_{2} & \dots & \dots & a_{n} & 0 & \dots & 0\\
0 & a_{0} & a_{1} & \dots & \dots & a_{n-1} & a_{n} & \dots & 0\\0 & 0 & a_{1} & \dots & \dots & a_{n-2} & a_{n-1} & \dots & 0\\ \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots &  \\
0 & 0 & \dots & 0 & a_{0} & \dots & \dots & \dots & a_{n}\\ 
 b_{0} & b_{1} & b_{2} & \dots & \dots & \dots & b_{m} & \dots & 0\\ 0 & b_{0} & b_{1} & \dots & \dots & \dots & b_{m-1} & b_{m} & \dots 
\\ 0 & b_{0} & b_{1} & \dots & \dots & \dots & b_{m-1} & b_{m} & \dots\\ \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots &  \\
 0 & \dots & 0 & b_{0} & b_{1} & \dots & \dots & \dots & b_{m} \end{vmatrix}$$
  为 $f(x)$ 与 $g(x)$ 的结式或称为 Sylvester 行列式.


>[!rmk] 备注：引入结式的动机
>结式在本节的推论是：
>
>多项式 $f(x)$ 有重根 $\Longleftrightarrow$ 判别式 $\Delta(f)=0.$
>
>如 $ax^2+bx+c$ 判别式为 $a^2(x_{1}-x_{2})^2=b^2-4ac$ 正是初中学的一元二次方程判别式，这就相当于在公根的问题上，不只有公因式的路径： [[多项式没有重因式的充要条件]]，[[多项式与形式导数的推论]]，还有结式的路径，这样就完整地提供了两种路径解决公根问题。











