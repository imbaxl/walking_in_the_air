

| 排序  | 内容                     |
| --- | ---------------------- |
| 定理1 | 极值的必要条件（Lagrange 乘数法）  |
| 定理2 | 极值的充分条件（Hessian 矩阵判别式） |



****

我试着用不那么正式的语言来描述 Lagrange 乘数法是怎么引入的。

1. 解析条件：约束条件实际是一个隐函数方程组，$$\begin{cases} G(x,y,z)=0 \\ H(x,y,z)=0 \end{cases}$$ 这意味着我可以得到 Jacobi 矩阵 $J=\begin{pmatrix} G_{x} & G_{y} & G_{z} \\ H_{x} & H_{y} & H_{z} \end{pmatrix}$ ，再假设 $\text{r}(J)=2$ 保证 [[隐函数#^d51d0b|隐函数定理4]] 在点 $(x_{0},y_{0},z_{0})$ 可以得到显式的 $y=y(x),z=z(x)$
2. 退化成一元函数极值问题：代入到 $f(x,y,z)$，就有 $\Phi(x)= f(x,y(x),z(x))$，此时约束条件只受到 $x$ 的影响，所以视作一元函数，由 Fermat 引理，极值点可导，那么导数为零： $$f_{x}(x_{0},y_{0},z_{0})+f_{y}(x_{0},y_{0},z_{0})\dfrac{\mathrm{d}y}{\mathrm{d}x}+f_{z}(x_{0},y_{0},z_{0})\dfrac{\mathrm{d}z}{\mathrm{d}x} =0$$
3. 解读导数为零：可以得到 $f$ 的梯度 $\,\mathrm{grad}\,f$ 与 $\Phi$ 的切向量 $\boldsymbol{\tau}=(1,\dfrac{\mathrm{d}y}{\mathrm{d}x},\dfrac{\mathrm{d}z}{\mathrm{d}x})$ 在 $(x_{0},y_{0},z_{0})$ 正交，说明在这一点上 $\,\mathrm{grad}\,f$ 也在 $\Phi$ 的法平面内，由 [[偏导数在几何的应用#^46f805|偏导数在几何的应用 定理2]]，这个法平面可以用回 $\,\mathrm{grad}\,G,\,\mathrm{grad}\,H$ 描述，也就是$\,\mathrm{grad}\,f$ 可由这俩线性表示
4. 展开表达式：$$\,\mathrm{grad}\, f=\lambda_{0}\,\mathrm{grad}\,G+\mu_{0}\,\mathrm{grad}\,H \tag{1}$$ 构造 Lagrange 函数：$$L(x,y,z,\lambda,\mu)=f(x,y,z)-\lambda G(x,y,z)-\mu H(x,y,z) $$对其求所有偏导，就能还原出 $(1)$，实际应用中也不用记 Lagrange 函数，只需要将梯度的线性表示从每个分量上表示
5. 计算过程
	1. 求出以 $\lambda,\mu$ 表示的 $x,y,z$
	2. 代入到约束方程，反解出 $\lambda,\mu$
	3. 再代回第一步，解出具体的 $x,y,z$


>[!thm] 定理1（条件极值的必要条件）
>若点 $\boldsymbol{x}_0 = (x_1^0, x_2^0, \cdots, x_n^0)$ 为函数 $f(\boldsymbol{x})$ 满足约束条件的条件极值点，则必存在 $m$ 个常数 $\lambda_1, \lambda_2, \cdots, \lambda_m$，使得在 $\boldsymbol{x}_0$ 点成立
>$$
>\text{grad} \, f = \lambda_1 \, \text{grad} \, g_1 + \lambda_2 \, \text{grad} \, g_2 + \cdots + \lambda_m \, \text{grad} \, g_m.
>$$



>[!thm] 定理2（条件极值的充分条件）
>设点 $\boldsymbol{x}_0 = (x_1^0, x_2^0, \cdots, x_n^0)$ 及 $m$ 个常数 $\lambda_1, \lambda_2, \cdots, \lambda_m$ 满足方程组 
>$$
>\left\{ \begin{aligned} &\frac{\partial L}{\partial x_k} = \frac{\partial f}{\partial x_k} - \sum_{i=1}^{m} \lambda_i \frac{\partial g_i}{\partial x_k} = 0, \\& g_l = 0 \end{aligned} \right. \quad (k = 1,2,\cdots,n; \, l = 1,2,\cdots,m)
>$$
>则当方阵
>$$
>\left( \frac{\partial^2 L}{\partial x_k \partial x_l} (\boldsymbol{x}_0, \lambda_1, \lambda_2, \cdots, \lambda_m) \right)_{n \times n}
>$$
>为正定（负定）矩阵时，$x_0$ 为满足约束条件的条件极小（大）值点，因此 $f(x_0)$ 为满足约束条件的条件极小（大）值，不定时定理失效.








