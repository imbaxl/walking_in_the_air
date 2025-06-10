---
{}
---
>[!thm] 定理：Stokes公式
>设 $\Sigma$ 为光滑曲面，其边界 $\partial \Sigma$ 为分段光滑闭曲线，若函数 $P(x,y,z)$，$Q(x,y,z)$，$R(x,y,z)$ 在 $\Sigma$ 及其边界 $\partial \Sigma$ 上具有连续偏导数，则成立
>$$\begin{align}
>&\displaystyle\int\limits_{\partial \Sigma}P\mathrm{d}x+Q\mathrm{d}y+R\mathrm{d}z \\
>&=\iint\limits_{\Sigma}\begin{vmatrix}
>\mathrm{d}y\mathrm{d}z& \mathrm{d}z\mathrm{d}x&\mathrm{d}x\mathrm{d}y \\
>\dfrac{\partial{}}{\partial{x}}&\dfrac{\partial{}}{\partial{y}}&\dfrac{\partial{}}{\partial{z}} \\
>P&Q&R
\end{vmatrix} \\
>&=\iint\limits_{\Sigma}\begin{vmatrix}
>\cos\alpha&\cos\beta&\cos\gamma \\
>\dfrac{\partial{}}{\partial{x}}&\dfrac{\partial{}}{\partial{y}}&\dfrac{\partial{}}{\partial{z}} \\
>P&Q&R
\end{vmatrix}\mathrm{d}S.
\end{align}$$
其中 $\partial \Sigma$ 取诱导定向.




