// ===========================================================================
// クッキー値取得
// ===========================================================================
function getCookieValue(name)
{
	var result = '',
		key = name+'=',
		_cookie = document.cookie,
		_s = _cookie.indexOf(key),
		_e = _cookie.indexOf(';',_s);

	_e = _e === -1 ? _cookie.length : _e;
	result = decodeURIComponent(_cookie.substring(_s,_e)).replace(key,'');
	return result;
}

// ===========================================================================
// クッキー削除
// ===========================================================================
function deleteCookie(name)
{
//	document.cookie = name+'=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
	document.cookie = name + "=;" + "expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// ===========================================================================
// クッキー監視
// ===========================================================================
function checkCookie()
{
	if (getCookieValue('csvDL') == 'fin') {
		document.getElementById("csvDL").disabled = false;
		deleteCookie('csvDL');
	}
	else {
		setTimeout( checkCookie, 100);
	}
}
