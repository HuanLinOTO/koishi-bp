// 他妈的 Koishi 主包不能直接引用
export function random(n: number, m: number) {
	var comt = m - n + 1;
	return Math.floor(Math.random() * comt + n)
}