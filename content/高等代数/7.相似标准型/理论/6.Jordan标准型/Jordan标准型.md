---
tags: 高等代数
---


| 排序      | 内容                                                 |
| ------- | -------------------------------------------------- |
| 引理1     | Jordan块的初等因子组                                      |
| 引理2     | 计算初等因子的捷径                                          |
| 引理3     | Jordan标准型的初等因子组                                    |
| **定理4** | 给定数字矩阵的初等因子组，可相似于Jordan标准型                         |
| 定义5     | Jordan标准型                                          |
| **定理6** | 定理4的几何版本                                           |
| 推论7     | 扩充可对角化的等价条件                                        |
| 推论8     | 推论7的几何版本                                           |
| 推论9     | 线性变换的限制保持可对角化                                      |
| 推论10    | 可对角化的充要条件是每个直和限制都可对角化                              |
| 推论11    | 特征值全在 $\mathbb{K}$ 中，则在 $\mathbb{K}$ 上相似于Jordan标准型 |



****




>[!lem] 引理1
>$r$ 阶矩阵$$J = \begin{pmatrix}\lambda_0 & 1 &  &  & \\ & \lambda_0 & 1 &  & \\&  & \ddots & \ddots & \\ &  &  & \ddots & 1 \\ &  &  &  & \lambda_0\end{pmatrix}$$的初等因子组为 $(\lambda - \lambda_0)^r$.

***说明***：
行列式因子是 $1,\cdots,1,(\lambda-\lambda_{0})^r$
不变因子是 $1,\cdots,1,(\lambda-\lambda_{0})^r$
初等因子为 $(\lambda-\lambda_{0})^r$，


>[!lem] 引理2
>设特征矩阵 $\lambda I - A$ 经过初等变换化为下列对角阵：$$\begin{pmatrix}f_{1}(\lambda) & & \\& f_{2}(\lambda) & \\& & \ddots & \\& & & f_{n}(\lambda)\end{pmatrix},$$
其中 $f_{i}(\lambda)$ $(i = 1, \cdots, n)$ 为非零首一多项式。将 $f_{i}(\lambda)$ 作不可约分解，若 $(\lambda - \lambda_{0})^{k}$ 能整除 $f_{i}(\lambda)$，但 $(\lambda - \lambda_{0})^{k + 1}$ 不能整除 $f_{i}(\lambda)$，就称 $(\lambda - \lambda_{0})^{k}$ 是 $f_{i}(\lambda)$ 的一个准素因子，则矩阵 $A$ 的初等因子组等于所有 $f_{i}(\lambda)$ 的准素因子组.





>[!lem] 引理3
>设 $J$ 是分块对角阵：$$\left(\begin{array}{ccc}J_{1} & & \\& J_{2} & \\ & & \ddots & \\& & & J_{k}\end{array}\right),~~~~$$
其中每个 $J_{i}$ 都是形如 **引理1** 中的矩阵，$J_{i}$ 的初等因子组为 $(\lambda - \lambda_{i})^{r_{i}}$，则 $J$ 的初等因子组为$$(\lambda - \lambda_{1})^{r_{1}},(\lambda - \lambda_{2})^{r_{2}}, \cdots, (\lambda - \lambda_{k})^{r_{k}}.$$




>[!thm] 定理4
>设 $A$ 是复数域上的矩阵且 $A$ 的初等因子组为 $(\lambda - \lambda_{1})^{r_{1}}$, $(\lambda - \lambda_{2})^{r_{2}}$, $\cdots$, $(\lambda - \lambda_{k})^{r_{k}}$，则 $A$ 相似于分块对角阵：$$J = \begin{pmatrix}J_{1} & & & \\& J_{2} & & \\ & & \ddots & \\ & & & J_{k}\end{pmatrix},$$
其中 $J_{i}$ 为 $r_{i}$ 阶矩阵，且$$J_{i} = \begin{pmatrix}\lambda_{i} & 1 & & & \\ & \lambda_{i} & 1 & & \\ & & \ddots & \ddots & \\
& & & \ddots & 1 \\ & & & & \lambda_{i}\end{pmatrix}.$$









得到Jordan标准型后，就要考虑怎么求可逆矩阵 $P$，使得$P^{-1}AP=J$.

方法参考：[[求Jordan标准型的可逆矩阵P]]

得到可逆矩阵 $P$ 后，根据 [[过渡矩阵]] 的定义，就得到了新基.

>[!dfn] 定义5（Jordan标准型）
>$$J = \begin{pmatrix}J_{1} & & & \\& J_{2} & & \\ & & \ddots & \\ & & & J_{k}\end{pmatrix},$$
>其中 $J_{i}$ 为 $r_{i}$ 阶矩阵，且$$J_{i} = \begin{pmatrix}\lambda_{i} & 1 & & & \\ & \lambda_{i} & 1 & & \\ & & \ddots & \ddots & \\
& & & \ddots & 1 \\ & & & & \lambda_{i}\end{pmatrix}.$$
则称矩阵 $J$ 为 $A$ 的 Jordan 标准型，每个 $J_{i}$ 称为 $A$ 的一个 Jordan 块.



>[!thm] 定理6
>设 $\varphi$ 是复数域上线性空间 $V$ 上的线性变换，则必存在 $V$ 的一组基，使得 $\varphi$ 在这组基下的表示矩阵为如下所示的 Jordan 标准型：$$J = \begin{pmatrix}J_{1} & & & \\& J_{2} & & \\ & & \ddots & \\ & & & J_{k}\end{pmatrix}.$$




>[!cor] 推论7
>设 $A$ 是 $n$ 阶复矩阵，则下列结论等价：
（1）$A$ 可对角化；
（2）$A$ 的极小多项式无重根；
（3）$A$ 的初等因子都是一次多项式.


> 推论7的几何版本如下：



>[!cor] 推论8
>设 $\varphi$ 是复线性空间 $V$ 上的线性变换，则 $\varphi$ 可对角化当且仅当 $\varphi$ 的极小多项式无重根，当且仅当 $\varphi$ 的初等因子都是一次多项式.



>[!cor] 推论9
>设 $\varphi$ 是复线性空间 $V$ 上的线性变换，$V_{0}$ 是 $\varphi$ 的不变子空间.  若 $\varphi$ 可对角化，则 $\varphi$ 在 $V_{0}$ 上的限制也可对角化.







>[!cor] 推论10
>设 $\varphi$ 是复线性空间 $V$ 上的线性变换，且 $V = V_{1} \oplus V_{2} \oplus \cdots \oplus V_{k}$，其中每个 $V_{i}$ 都是 $\varphi$ 的不变子空间，则 $\varphi$ 可对角化的充分必要条件是 $\varphi$ 在每个 $V_{i}$ 上的限制都可对角化.





>[!cor] 推论11
>设 $A$ 是数域 $\mathbb{K}$ 上的矩阵，如果 $A$ 的特征值全在 $\mathbb{K}$ 中，则 $A$ 在 $\mathbb{K}$ 上相似于其 Jordan 标准型.









