---
{}
---

# 1. 定义


>[!dfn] 定义： Gram（格列姆）矩阵，度量矩阵
>设 $V$ 是欧式空间，有 $$(\alpha,\beta)=\left( \displaystyle\sum _{i=1}^na_{i}v_{i},\displaystyle\sum _{j=1}^nb_{j}v_{j}\right)=\displaystyle\sum _{i,j=1}^na_{i}g_{ij}b_{j}\tag{1}$$
>其中 $(v_{i},v_{j})=g_{ij},(i,j=1,2,\dots,n)$，将其用矩阵表达：
>$$(1)=(a_{1},a_{2},\dots,a_{n})\begin{pmatrix}g_{11}&g_{12}&\dots&g_{1n} \\ g_{21}&g_{22}&\dots&g_{2n} \\ \vdots&\vdots&&\vdots \\ g_{n1}&g_{n2}&\dots&g_{nn} 
 \end{pmatrix}\begin{pmatrix} b_{1} \\
b_{2} \\
\vdots  \\ 
b_{n}\end{pmatrix}$$
其中矩阵 $$\begin{align}
G=&\begin{pmatrix} g_{11} & g_{12} & \dots & g_{1n} \\ g_{21}&g_{22}&\dots&g_{2n} \\ \vdots&\vdots&&\vdots \\ g_{n1}&g_{n2}&\dots&g_{nn} \end{pmatrix} \\ \\ =& \begin{pmatrix} (v_{1},v_{1}) & (v_{1},v_{2}) & \dots & (v_{1},v_{n}) \\ (v_{2},v_{1}) & (v_{2},v_{2}) & \dots & (v_{2},v_{n}) \\ \vdots & \vdots & & \vdots \\ (v_{n},v_{1}) & (v_{n},v_{2}) & \dots & (v_{n},v_{n})\end{pmatrix}
\end{align}  $$ 称为基向量 $\{{v_{1},v_{2},\dots,v_{n}}\}$ 的 **Gram（格列姆）矩阵**或内积空间 $V$ 在给定基下的**度量矩阵**. 
于是，我们得到了内积在给定基下的表示：$$(\alpha,\beta)=x'Gy. $$

# 2. 性质
看矩阵 $G=(g_{ij})_{n\times n}$，
1. $g_{ij}=(v_{i},v_{j})=(v_{j},v_{i})=g_{ji}$，$\Longrightarrow$ $G$ 是实对称阵.
2. 基向量 $v_{i}$ 是非零向量，$g_{ij}=(v_{i},v_{j})>0$ $\Longrightarrow$ $G$ 是正定阵.
所以 $G$ 是一个正定实对称阵，在此基础上可以验证 $(\alpha,\beta)=x'Gy$ 是内积：
性质（1）对称性
$$(\alpha,\beta)=x'Gy=(x'Gy)'=y'Gx=(\beta,\alpha) $$
性质（2）第一变元线性性
$$(\alpha+\gamma,\beta)=(x+z)'Gy=x'Gy+z'Gy=(\alpha,\beta)+(\gamma,\beta) $$
性质（3）第一变元线性性
$$(c\alpha,\beta)=(cx)'Gy=c(x'Gy)=c(\alpha,\beta) $$
性质（4）正定性，由 [[正定型与正定矩阵]] 定义，
$$(\alpha,\alpha)=x'Gx>0 $$


# 3. 推论
$$G=I_{n} \Longleftrightarrow (v_{i},v_{j})=0(i\neq j),\,(v_{i},v_{j})=1. $$














