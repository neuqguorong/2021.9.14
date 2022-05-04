module.exports = {
    "abs": {
        "name": "abs",
        "desc": "返回一个数字的绝对值",
        "format": "abs(表达式)"
    },
    "add": {
        "name": "add",
        "desc": "将数字相加或将数字加在日期上。如果参数中的其中一个值是日期，那么其他值将被视为毫秒数加在该日期上",
        "format": "add(表达式1,表达式2)"
    },
    "ceil": {
        "name": "ceil",
        "desc": "向上取整",
        "format": "ceil(表达式)"
    },
    "divide": {
        "name": "divide",
        "desc": "传入被除数和除数，求商",
        "format": "divide(表达式1,表达式2)"
    },
    "exp": {
        "name": "exp",
        "desc": "取 e（自然对数的底数，欧拉数） 的 n 次方",
        "format": "exp(表达式)"
    },
    "floor": {
        "name": "floor",
        "desc": "向下取整",
        "format": "floor(表达式)"
    },
    "ln": {
        "name": "ln",
        "desc": "计算给定数字在自然对数值",
        "format": "ln(表达式)"
    },
    "log": {
        "name": "log",
        "desc": "计算给定数字在给定对数底下的 log 值",
        "format": "log(表达式1,表达式2)"
    },
    "log10": {
        "name": "log10",
        "desc": "计算给定数字在对数底为 10 下的 log 值",
        "format": "log10(表达式)"
    },
    "mod": {
        "name": "mod",
        "desc": "取模运算，第一个数字是被除数，第二个数字是除数",
        "format": "mod(表达式1,表达式2)"
    },
    "multiply": {
        "name": "multiply",
        "desc": "取传入的数字参数相乘的结果",
        "format": "multiply(表达式1,表达式2)"
    },
    "pow": {
        "name": "pow",
        "desc": "求给定基数的指数次幂",
        "format": "pow(表达式1,表达式2)"
    },
    "sqrt": {
        "name": "sqrt",
        "desc": "求平方根",
        "format": "sqrt(表达式1,表达式2)"
    },
    "subtract": {
        "name": "subtract",
        "desc": "将两个数字相减然后返回差值，或将两个日期相减然后返回相差的毫秒数，或将一个日期减去一个数字返回结果的日期。",
        "format": "subtract(表达式1,表达式2)"
    },
    "trunc": {
        "name": "trunc",
        "desc": "将数字截断为整形",
        "format": "trunc(表达式)"
    },
    "arrayElemAt": {
        "name": "arrayElemAt",
        "desc": "返回在指定数组下标的元素",
        "format": "arrayElemAt(表达式1,表达式2)"
    },
    "arrayToObject": {
        "name": "arrayToObject",
        "desc": "将一个数组转换为对象",
        "format": "arrayToObject(表达式)"
    },
    "concatArrays": {
        "name": "concatArrays",
        "desc": "将多个数组拼接成一个数组",
        "format": "concatArrays(表达式1,表达式2)"
    },
    "filter": {
        "name": "filter",
        "desc": "根据给定条件返回满足条件的数组的子集",
        "format": "filter(input,as,cond)"
    },
    "in": {
        "name": "in",
        "desc": "给定一个值和一个数组，如果值在数组中则返回 true，否则返回 false",
        "format": "in(表达式1,表达式2)"
    },
    "indexOfArray": {
        "name": "indexOfArray",
        "desc": "在数组中找出等于给定值的第一个元素的下标，如果找不到则返回 -1",
        "format": "indexOfArray(表达式1,表达式2)"
    },
    "isArray": {
        "name": "isArray",
        "desc": "判断给定表达式是否是数组，返回布尔值",
        "format": "isArray(表达式)"
    },
    "map": {
        "name": "map",
        "desc": "类似 JavaScript Array 上的 map 方法，将给定数组的每个元素按给定转换方法转换后得出新的数组",
        "format": "map(input,as,in)"
    },
    "objectToArray": {
        "name": "objectToArray",
        "desc": "将一个对象转换为数组。方法把对象的每个键值对都变成输出数组的一个元素，元素形如 { k: <key>, v: <value> }",
        "format": "objectToArray(表达式)"
    },
    "range": {
        "name": "range",
        "desc": "返回一组生成的序列数字。给定开始值、结束值、非零的步长，range 会返回从开始值开始逐步增长、步长为给定步长、但不包括结束值的序列。",
        "format": "range(表达式1,表达式2)"
    },
    "reduce": {
        "name": "reduce",
        "desc": "类似 JavaScript 的 reduce 方法，应用一个表达式于数组各个元素然后归一成一个元素",
        "format": "reduce(input,initialValue,in)"
    },
    "reverseArray": {
        "name": "reverseArray",
        "desc": "返回给定数组的倒序形式",
        "format": "reverseArray(表达式)"
    },
    "size": {
        "name": "size",
        "desc": "返回数组长度",
        "format": "size(表达式)"
    },
    "slice": {
        "name": "slice",
        "desc": "类似 JavaScritp 的 slice 方法。返回给定数组的指定子集",
        "format": "slice(表达式1,表达式2)"
    },
    "zip": {
        "name": "zip",
        "desc": "把二维数组的第二维数组中的相同序号的元素分别拼装成一个新的数组进而组装成一个新的二维数组。",
        "format": "zip(inputs,useLongestLength,defaults)"
    },
    "and": {
        "name": "and",
        "desc": "给定多个表达式，and 仅在所有表达式都返回 true 时返回 true，否则返回 false",
        "format": "and(表达式1,表达式2)"
    },
    "not": {
        "name": "not",
        "desc": "给定一个表达式，如果表达式返回 true，则 not 返回 false，否则返回 true。注意表达式不能为逻辑表达式（and、or、nor、not）",
        "format": "not(表达式)"
    },
    "or": {
        "name": "or",
        "desc": "给定多个表达式，如果任意一个表达式返回 true，则 or 返回 true，否则返回 false",
        "format": "or(表达式1,表达式2)"
    },
    "cmp": {
        "name": "cmp",
        "desc": "给定两个值，返回其比较值。如果第一个值小于第二个值，返回 -1 如果第一个值大于第二个值，返回 1 如果两个值相等，返回 0",
        "format": "cmp(表达式1,表达式2)"
    },
    "eq": {
        "name": "eq",
        "desc": "匹配两个值，如果相等则返回 true，否则返回 false",
        "format": "eq(表达式1,表达式2)"
    },
    "gt": {
        "name": "gt",
        "desc": "匹配两个值，如果前者大于后者则返回 true，否则返回 false",
        "format": "gt(表达式1,表达式2)"
    },
    "gte": {
        "name": "gte",
        "desc": "匹配两个值，如果前者大于或等于后者则返回 true，否则返回 false",
        "format": "gte(表达式1,表达式2)"
    },
    "lt": {
        "name": "lt",
        "desc": "匹配两个值，如果前者小于后者则返回 true，否则返回 false",
        "format": "lt(表达式1,表达式2)"
    },
    "lte": {
        "name": "lte",
        "desc": "匹配两个值，如果前者小于或等于后者则返回 true，否则返回 false",
        "format": "lte(表达式1,表达式2)"
    },
    "neq": {
        "name": "neq",
        "desc": "匹配两个值，如果不相等则返回 true，否则返回 false",
        "format": "neq(表达式1,表达式2)"
    },
    "cond": {
        "name": "cond",
        "desc": "计算布尔表达式，返回指定的两个值其中之一",
        "format": "cond(表达式1,表达式2)"
    },
    "ifNull": {
        "name": "ifNull",
        "desc": "计算给定的表达式，如果表达式结果为 null、undefined 或者不存在，那么返回一个替代值；否则返回原值。",
        "format": "ifNull(表达式1,表达式2)"
    },
    "switch": {
        "name": "switch",
        "desc": "根据给定的 switch-case-default 计算返回值",
        "format": "switch(branches,default)"
    },
    "dateFromParts": {
        "name": "dateFromParts",
        "desc": "给定日期的相关信息，构建并返回一个日期对象",
        "format": "dateFromParts(year,month,day,hour,minute,second,millisecond,timezone)"
    },
    "isoDateFromParts": {
        "name": "isoDateFromParts",
        "desc": "给定日期的相关信息，构建并返回一个日期对象",
        "format": "isoDateFromParts(isoWeekYear,isoWeek,isoDayOfWeek,hour,minute,second,millisecond,timezone)"
    },
    "dateFromString": {
        "name": "dateFromString",
        "desc": "将一个日期/时间字符串转换为日期对象",
        "format": "dateFromString(dateString,format,timezone,onError,onNull)"
    },
    "dateToString": {
        "name": "dateToString",
        "desc": "根据指定的表达式将日期对象格式化为符合要求的字符串",
        "format": "dateToString(date,format,timezone,onNull)"
    },
    "dayOfMonth": {
        "name": "dayOfMonth",
        "desc": "返回日期字段对应的天数（一个月中的哪一天），是一个介于 1 至 31 之间的数字",
        "format": "dayOfMonth(date,timezone)"
    },
    "dayOfWeek": {
        "name": "dayOfWeek",
        "desc": "返回日期字段对应的天数（一周中的第几天），是一个介于 1（周日）到 7（周六）之间的整数",
        "format": "dayOfWeek(date,timezone)"
    },
    "dayOfYear": {
        "name": "dayOfYear",
        "desc": "返回日期字段对应的天数（一年中的第几天），是一个介于 1 到 366 之间的整数",
        "format": "dayOfYear(date,timezone)"
    },
    "hour": {
        "name": "hour",
        "desc": "返回日期字段对应的小时数，是一个介于 0 到 23 之间的整数。",
        "format": "hour(date,timezone)"
    },
    "isoDayOfWeek": {
        "name": "isoDayOfWeek",
        "desc": "返回日期字段对应的 ISO 8601 标准的天数（一周中的第几天），是一个介于 1（周一）到 7（周日）之间的整数。",
        "format": "isoDayOfWeek(date,timezone)"
    },
    "isoWeek": {
        "name": "isoWeek",
        "desc": "返回日期字段对应的 ISO 8601 标准的周数（一年中的第几周），是一个介于 1 到 53 之间的整数。",
        "format": "isoWeek(date,timezone)"
    },
    "isoWeekYear": {
        "name": "isoWeekYear",
        "desc": "返回日期字段对应的 ISO 8601 标准的天数（一年中的第几天）",
        "format": "isoWeekYear(date,timezone)"
    },
    "millisecond": {
        "name": "millisecond",
        "desc": "返回日期字段对应的毫秒数，是一个介于 0 到 999 之间的整数",
        "format": "millisecond(date,timezone)"
    },
    "minute": {
        "name": "minute",
        "desc": "返回日期字段对应的分钟数，是一个介于 0 到 59 之间的整数",
        "format": "minute(date,timezone)"
    },
    "month": {
        "name": "month",
        "desc": "返回日期字段对应的月份，是一个介于 1 到 12 之间的整数",
        "format": "month(date,timezone)"
    },
    "second": {
        "name": "second",
        "desc": "返回日期字段对应的秒数，是一个介于 0 到 59 之间的整数，在特殊情况下（闰秒）可能等于 60",
        "format": "second(date,timezone)"
    },
    "week": {
        "name": "week",
        "desc": "返回日期字段对应的周数（一年中的第几周），是一个介于 0 到 53 之间的整数",
        "format": "week(date,timezone)"
    },
    "year": {
        "name": "year",
        "desc": "返回日期字段对应的年份",
        "format": "year(date,timezone)"
    },
    "timestampToDate": {
        "name": "timestampToDate",
        "desc": "传入一个时间戳，返回对应的日期对象",
        "format": "timestampToDate(timestamp)"
    },
    "literal": {
        "name": "literal",
        "desc": "直接返回一个值的字面量，不经过任何解析和处理",
        "format": "literal(表达式)"
    },
    "mergeObjects": {
        "name": "mergeObjects",
        "desc": "将多个对象合并为单个对象",
        "format": "mergeObjects(表达式1,表达式2)"
    },
    "allElementsTrue": {
        "name": "allElementsTrue",
        "desc": "输入一个数组，或者数组字段的表达式。如果数组中所有元素均为真值，那么返回 true，否则返回 false。空数组永远返回 true",
        "format": "allElementsTrue(表达式1,表达式2)"
    },
    "anyElementTrue": {
        "name": "anyElementTrue",
        "desc": "输入一个数组，或者数组字段的表达式。如果数组中任意一个元素为真值，那么返回 true，否则返回 false。空数组永远返回 false",
        "format": "anyElementTrue(表达式1,表达式2)"
    },
    "setDifference": {
        "name": "setDifference",
        "desc": "输入两个集合，输出只存在于第一个集合中的元素",
        "format": "setDifference(表达式1,表达式2)"
    },
    "setEquals": {
        "name": "setEquals",
        "desc": "输入两个集合，判断两个集合中包含的元素是否相同（不考虑顺序、去重）",
        "format": "setEquals(表达式1,表达式2)"
    },
    "setIntersection": {
        "name": "setIntersection",
        "desc": "输入两个集合，输出两个集合的交集",
        "format": "setIntersection(表达式1,表达式2)"
    },
    "setIsSubset": {
        "name": "setIsSubset",
        "desc": "输入两个集合，判断第一个集合是否是第二个集合的子集",
        "format": "setIsSubset(表达式1,表达式2)"
    },
    "setUnion": {
        "name": "setUnion",
        "desc": "输入两个集合，输出两个集合的并集",
        "format": "setUnion(表达式1,表达式2)"
    },
    "concat": {
        "name": "concat",
        "desc": "连接字符串，返回拼接后的字符串",
        "format": "concat(表达式1,表达式2)"
    },
    "indexOfBytes": {
        "name": "indexOfBytes",
        "desc": "在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的字节索引（从0开始）。如果不存在子字符串，返回 -1",
        "format": "indexOfBytes(表达式1,表达式2)"
    },
    "indexOfCP": {
        "name": "indexOfCP",
        "desc": "在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的 code point 索引（从0开始）。如果不存在子字符串，返回 -1",
        "format": "indexOfCP(表达式1,表达式2)"
    },
    "split": {
        "name": "split",
        "desc": "按照分隔符分隔数组，并且删除分隔符，返回子字符串组成的数组。如果字符串无法找到分隔符进行分隔，返回原字符串作为数组的唯一元素",
        "format": "split(表达式1,表达式2)"
    },
    "strLenBytes": {
        "name": "strLenBytes",
        "desc": "计算并返回指定字符串中 utf-8 编码的字节数量",
        "format": "strLenBytes(表达式)"
    },
    "strLenCP": {
        "name": "strLenCP",
        "desc": "计算并返回指定字符串的UTF-8 code points 数量",
        "format": "strLenCP(表达式)"
    },
    "strcasecmp": {
        "name": "strcasecmp",
        "desc": "对两个字符串在不区分大小写的情况下进行大小比较，并返回比较的结果",
        "format": "strcasecmp(表达式1,表达式2)"
    },
    "substr": {
        "name": "substr",
        "desc": "返回字符串从指定位置开始的指定长度的子字符串",
        "format": "substr(表达式1,表达式2)"
    },
    "substrBytes": {
        "name": "substrBytes",
        "desc": "返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数",
        "format": "substrBytes(表达式1,表达式2)"
    },
    "substrCP": {
        "name": "substrCP",
        "desc": "返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数",
        "format": "substrCP(表达式1,表达式2)"
    },
    "toLower": {
        "name": "toLower",
        "desc": "将字符串转化为小写并返回",
        "format": "toLower(表达式)"
    },
    "toUpper": {
        "name": "toUpper",
        "desc": "将字符串转化为大写并返回",
        "format": "toUpper(表达式)"
    },
    "addToSet": {
        "name": "addToSet",
        "desc": "聚合运算符。向数组中添加值，如果数组中已存在该值，不执行任何操作。它只能在 group stage 中使用",
        "format": "addToSet(表达式)"
    },
    "avg": {
        "name": "avg",
        "desc": "返回指定表达式对应数据的平均值",
        "format": "avg(表达式)"
    },
    "first": {
        "name": "first",
        "desc": "返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义",
        "format": "first(表达式)"
    },
    "last": {
        "name": "last",
        "desc": "返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。",
        "format": "last(表达式)"
    },
    "max": {
        "name": "max",
        "desc": "返回一组数值的最大值",
        "format": "max(表达式)"
    },
    "min": {
        "name": "min",
        "desc": "返回一组数值的最小值",
        "format": "min(表达式)"
    },
    "push": {
        "name": "push",
        "desc": "返回一组中表达式指定列与对应的值，一起组成的数组",
        "format": "push(表达式)"
    },
    "stdDevPop": {
        "name": "stdDevPop",
        "desc": "返回一组字段对应值的标准差",
        "format": "stdDevPop(表达式)"
    },
    "stdDevSamp": {
        "name": "stdDevSamp",
        "desc": "计算输入值的样本标准偏差",
        "format": "stdDevSamp(表达式)"
    },
    "sum": {
        "name": "sum",
        "desc": "在groupField内返回一组字段所有数值的总和，非groupField内返回一个数组所有元素的和",
        "format": "sum(表达式)"
    },
    "let": {
        "name": "let",
        "desc": "自定义变量，并且在指定表达式中使用，返回的结果是表达式的结果",
        "format": "let(vars,in)"
    }
}