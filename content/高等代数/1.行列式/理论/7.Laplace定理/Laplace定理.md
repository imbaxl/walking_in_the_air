---
{}
---

# 1. 引言

由 [[行列式性质]]


# 2. 定理

>[!thm] 定理：Laplace 定理
>设 $|A|$ 是 $n$ 阶行列式，在 $|A|$ 中任取 $k$ 行(列)，那么含于这 $k$ 行(列) 的全部 $k$ 阶子式与它们所对应的代数余子式的乘积之和等于 $|A|$. 
>即若取定 $k$ 个行：$1\leqslant i_{1}< i_{2}<\dots< i_{k}\leqslant n$，则
>$$\begin{align}
>&|A|=\displaystyle\sum\limits_{1\leqslant j_{1}<j_{2}<\dots<j_{k}\leqslant n}\\&A\begin{pmatrix}
>i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}
\end{pmatrix}\widehat{A}\begin{pmatrix}
>i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}
\end{pmatrix}.
\end{align}$$
同样若取定 $k$ 个列：$1\leqslant j_{1}< j_{2}<\dots< j_{k}\leqslant n$，则
>$$\begin{align}
>&|A|=\displaystyle\sum\limits_{1\leqslant i_{1}<i_{2}<\dots<i_{k}\leqslant n}\\&A\begin{pmatrix}
>i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}
\end{pmatrix}\widehat{A}\begin{pmatrix}
>i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}
\end{pmatrix}.
\end{align}$$


>[!rmk] 备注：符号的解释
>其中，对应的代数余子式 $\widehat{A}$ 符号为
>$$\begin{align}
>&\widehat{A}\begin{pmatrix}
>i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}\end{pmatrix}\\
 =&(-1)^{p+q}M\begin{pmatrix}
i_{1}&i_{2}&\dots&i_{k}\\j_{1}&j_{2}&\dots&j_{k}\end{pmatrix}
\end{align}$$
其中，$p=i_{1}+i_{2}+\dots+i_{k}$，$q=j_{1}+j_{2}+\dots+j_{k}$，$M$ 是余子式.




