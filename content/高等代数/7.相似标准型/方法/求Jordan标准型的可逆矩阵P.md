---
{}
---


通过计算法式得到 Jordan标准型不是一件难事，因此考虑更进一步，计算出可逆矩阵 $P$，假设 $P=(\alpha_{1},\alpha_{2},\alpha_{3},\alpha_{4})$，使得 $P^{-1}AP=J$，经过一些变换，得到如下表达式：

$$
AP = (A{\alpha _1},A{\alpha _2}, \cdots ,A{\alpha _n}) = ({\alpha _1},{\alpha _2}, \cdots ,{\alpha _n})J \\
$$


假设$$ J=\begin{pmatrix}
1&1&& \\
0&1&& \\
&&1&1 \\
&&0&1
\end{pmatrix}
$$
则有如下方程组
$$\begin{align}
(A-I)\alpha_{1}&=0,\\  \\

(A-I)\alpha_{2}&=\alpha_{1},\\ \\

(A-I)\alpha_{3}&=0, \\ \\

(A-I)\alpha_{4}&=\alpha_{3},
\end{align}
 $$

其中 $\alpha_{1}$ 和 $\alpha_{3}$ 都能直接求出，但是另外两个只需要分别将 $\alpha_{1}$ 和 $\alpha_{3}$ 分别列入增广矩阵的常数列中，再进行初等变换即可求解.

>[!rmk] 备注：容易错的地方
>有试过是在系数矩阵初等变换过后，再把常数列加入，就得到无解的问题，因为常数列需要在最开始需要和系数矩阵同时初等变换，否则导致错误.




<center></center>