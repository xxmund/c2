function a12_0x39a6(){const _0x1eae0d=['upArrow','491043OTXvAa','exit','escape','2840480lHSyOM','length','leftArrow','2674596ngmMHn','toString','rightArrow','downArrow','7072770LfoDEd','1417954gNveKj','24cvLfeV','3687831LGinwN','3EUBLll','1237299lcEBJc'];a12_0x39a6=function(){return _0x1eae0d;};return a12_0x39a6();}(function(_0x5893cb,_0x4cb763){const _0x5972e0=a12_0x2708,_0x1a68ea=_0x5893cb();while(!![]){try{const _0x2ee02f=-parseInt(_0x5972e0(0x132))/0x1+parseInt(_0x5972e0(0x12e))/0x2*(parseInt(_0x5972e0(0x131))/0x3)+-parseInt(_0x5972e0(0x129))/0x4+-parseInt(_0x5972e0(0x137))/0x5+parseInt(_0x5972e0(0x12d))/0x6+parseInt(_0x5972e0(0x134))/0x7+-parseInt(_0x5972e0(0x12f))/0x8*(-parseInt(_0x5972e0(0x130))/0x9);if(_0x2ee02f===_0x4cb763)break;else _0x1a68ea['push'](_0x1a68ea['shift']());}catch(_0x314fd8){_0x1a68ea['push'](_0x1a68ea['shift']());}}}(a12_0x39a6,0xae1c2));import{useFocusManager,useInput}from'ink';import{useEffect,useState}from'react';import{groupAccounts,runtimeServer}from'../utils/helper.js';const useStartBot=({accounts:_0x2b3569,onChange:_0x44945c})=>{const {focus:_0x1784aa}=useFocusManager(),[_0x120155,_0x48e9d6]=useState(0x0),[_0x343e0c,_0xdbcfc2]=useState([]),[_0x1c3522,_0x2237a3]=useState({'status':'connect','baner':''}),_0x448f83=_0x17d9a5=>{const _0x57c478=a12_0x2708;if(_0x17d9a5>_0x343e0c['length'])_0x48e9d6(0x1);else _0x17d9a5<0x1?_0x48e9d6(_0x343e0c[_0x57c478(0x138)]):_0x48e9d6(_0x17d9a5);};return useInput((_0x15f6e1,_0xfd650a)=>{const _0x1b483f=a12_0x2708;if(_0x15f6e1)try{let _0xd577ff=parseInt(_0x15f6e1);_0xd577ff<=_0x343e0c[_0x1b483f(0x138)]&&_0x48e9d6(_0xd577ff);}catch(_0x310860){}_0xfd650a[_0x1b483f(0x133)]&&_0x448f83(_0x120155-0x1),_0xfd650a[_0x1b483f(0x12c)]&&_0x448f83(_0x120155+0x1),_0xfd650a[_0x1b483f(0x128)]&&_0x448f83(_0x120155-0x1),_0xfd650a[_0x1b483f(0x12b)]&&_0x448f83(_0x120155+0x1),_0xfd650a[_0x1b483f(0x136)]&&_0x44945c('back'),_0x15f6e1==='q'&&_0x44945c('exit');}),useEffect(()=>{const _0x10f772=async()=>{const _0x3f58ff=a12_0x2708;if(_0x1c3522['status']==='reconnecting'){const _0x13c286=await runtimeServer();_0x13c286['status']==='exit'&&_0x44945c(_0x3f58ff(0x135)),_0x2237a3(_0x13c286);}},_0x20c193=setInterval(_0x10f772,0x5*0x3e8);return()=>{clearInterval(_0x20c193);};},[_0x1c3522]),useEffect(()=>{const _0x783c99=a12_0x2708;if(_0x343e0c[_0x783c99(0x138)]<0x1){const _0x10b8c5=groupAccounts(_0x2b3569,0x1);_0xdbcfc2(_0x10b8c5),_0x48e9d6(0x1);}},[_0x343e0c]),useEffect(()=>{const _0x4e1aea=a12_0x2708;_0x1784aa(_0x120155[_0x4e1aea(0x12a)]());},[_0x120155]),{'pageAccount':_0x343e0c,'runtimeStatus':_0x1c3522,'focusOn':_0x120155};};function a12_0x2708(_0x3b79ac,_0x1c9323){const _0x39a6fe=a12_0x39a6();return a12_0x2708=function(_0x27086f,_0x367ad7){_0x27086f=_0x27086f-0x128;let _0x305cea=_0x39a6fe[_0x27086f];return _0x305cea;},a12_0x2708(_0x3b79ac,_0x1c9323);}export default useStartBot;