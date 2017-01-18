import "babel-polyfill";
import React from 'react';
import Video from 'react-html5video';
import styles from './styles.scss';

function Introduction() {
  return (
    <section className={styles.introduction}>
      <svg className={styles.introductionMask} viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="mask" x="0" y="0" width="1440" height="1024" >
            <rect x="0" y="0" width="1440" height="1024" />
            <path className={styles.introductionMaskText} d="M154.6735,150.444 L125.8815,171.212 C114.238775,171.212 105.782193,168.340695 100.5115,162.598 C95.240807,156.855305 92.6055,147.612064 92.6055,134.868 L92.6055,72.092 L76.7935,72.092 L76.7935,64.54 C83.401533,60.9213152 90.5994611,55.7687001 98.3875,49.082 C106.175539,42.3952999 113.294801,35.3547036 119.7455,27.96 L127.5335,30.32 L126.3535,62.888 L153.9655,62.888 L153.9655,72.8 L125.8815,72.328 L125.8815,126.608 C125.8815,134.160038 127.336819,139.666649 130.2475,143.128 C133.158181,146.589351 137.052142,148.32 141.9295,148.32 L150.6615,143.364 L154.6735,150.444 Z M249.5455,73.272 C259.142881,82.5547131 263.9415,95.7705809 263.9415,112.92 C263.9415,120.314704 262.643513,127.945294 260.0475,135.812 C257.451487,143.678706 253.636192,150.601303 248.6015,156.58 C243.566808,161.457358 237.7062,165.351319 231.0195,168.262 C224.3328,171.172681 217.292204,172.628 209.8975,172.628 C194.164088,172.628 181.498881,167.986713 171.9015,158.704 C162.304119,149.421287 157.5055,136.205419 157.5055,119.056 C157.5055,111.81863 158.84282,104.266706 161.5175,96.4 C164.19218,88.533294 168.046808,81.6106966 173.0815,75.632 C178.116192,70.7546423 183.9768,66.8213483 190.6635,63.832 C197.3502,60.8426517 204.31213,59.348 211.5495,59.348 C227.282912,59.348 239.948119,63.9892869 249.5455,73.272 Z M200.3395,141.24 C206.239529,148.634704 214.932109,153.039993 226.4175,154.456 C227.518839,149.735976 228.384164,144.465362 229.0135,138.644 C229.642836,132.822638 229.9575,128.024019 229.9575,124.248 C229.9575,109.143924 227.007529,97.9340366 221.1075,90.618 C215.20747,83.3019634 206.593557,78.9360071 195.2655,77.52 C194.164161,82.3973577 193.259504,87.7466376 192.5515,93.568 C191.843496,99.3893624 191.4895,104.109315 191.4895,107.728 C191.4895,122.674741 194.43947,133.845296 200.3395,141.24 Z M390.2015,153.276 L357.3975,171.92 C352.362808,169.24532 348.665512,165.587357 346.3055,160.946 C343.945488,156.304643 342.7655,150.36537 342.7655,143.128 L322.4695,172.628 C307.680093,172.628 296.745535,169.048702 289.6655,161.89 C282.585465,154.731298 279.0455,143.678741 279.0455,128.732 L279.0455,70.44 L270.3135,69.732 L270.3135,62.888 L312.3215,62.888 L312.3215,119.292 C312.3215,126.372035 314.170148,131.839314 317.8675,135.694 C321.564852,139.548686 326.481469,141.554666 332.6175,141.712 L342.7655,132.272 L342.7655,70.44 L334.2695,69.732 L334.2695,62.888 L376.0415,62.888 L376.0415,129.44 C376.0415,135.261362 376.395496,139.587986 377.1035,142.42 C377.811504,145.252014 378.952159,147.690656 380.5255,149.736 L387.6055,146.196 L390.2015,153.276 Z M487.3155,161.3 C493.530198,164.289348 498.368149,168.222642 501.8295,173.1 C498.840152,182.068045 494.080866,190.878623 487.5515,199.532 C481.022134,208.185377 473.155546,215.304639 463.9515,220.89 C454.747454,226.475361 444.874886,229.268 434.3335,229.268 C424.106782,229.268 415.886198,226.711359 409.6715,221.598 C403.456802,216.484641 400.3495,209.994706 400.3495,202.128 C400.3495,195.519967 402.001483,188.046708 405.3055,179.708 C399.641472,177.03332 394.921519,172.234701 391.1455,165.312 L414.9815,138.644 C409.002803,135.339983 404.322184,130.895361 400.9395,125.31 C397.556816,119.724639 395.8655,113.470701 395.8655,106.548 C395.8655,100.097301 397.20282,93.7253648 399.8775,87.432 C402.55218,81.1386352 405.934813,75.7893554 410.0255,71.384 C413.958853,68.0799835 419.2688,65.2480118 425.9555,62.888 C432.6422,60.5279882 439.682796,59.348 447.0775,59.348 C452.42686,59.348 457.068147,59.8986612 461.0015,61 L480.5895,27.724 C483.736182,27.0946635 487.040149,26.78 490.5015,26.78 C497.109533,26.78 503.481469,28.11732 509.6175,30.792 L493.0975,61.472 C488.062808,59.4266564 483.106858,58.404 478.2295,58.404 C476.656159,58.404 474.610846,58.5613318 472.0935,58.876 L468.5535,63.596 C475.633535,66.7426824 481.218813,71.3053034 485.3095,77.284 C489.400187,83.2626966 491.4455,90.185294 491.4455,98.052 C491.4455,104.188031 490.068847,110.284636 487.3155,116.342 C484.562153,122.399364 481.218853,127.866642 477.2855,132.744 C473.352147,136.205351 468.0422,139.076655 461.3555,141.358 C454.6688,143.639345 447.70687,144.78 440.4695,144.78 C433.546799,144.78 427.174862,143.678678 421.3535,141.476 L415.9255,148.084 C416.869505,149.500007 418.914818,150.758661 422.0615,151.86 C425.208182,152.961339 428.984145,153.590666 433.3895,153.748 L464.7775,155.872 C473.588211,156.501336 481.100802,158.310652 487.3155,161.3 Z M452.7415,83.892 C447.706808,78.3853058 440.626879,75.002673 431.5015,73.744 C428.512152,82.3973766 427.0175,90.4212964 427.0175,97.816 C427.0175,107.256047 429.534808,114.729306 434.5695,120.236 C439.604192,125.742694 446.762787,129.125327 456.0455,130.384 C458.877514,122.989296 460.2935,115.122708 460.2935,106.784 C460.2935,97.0292846 457.776192,89.3986942 452.7415,83.892 Z M461.2375,202.954 C465.800189,201.931328 469.654818,200.712007 472.8015,199.296 C475.948182,197.879993 477.836164,196.621339 478.4655,195.52 C477.521495,193.317322 474.728857,191.154011 470.0875,189.03 C465.446143,186.905989 458.956208,185.608002 450.6175,185.136 L424.4215,183.72 C421.432152,183.562666 417.813521,183.169336 413.5655,182.54 C414.352171,188.833365 417.774136,194.064646 423.8315,198.234 C429.888864,202.403354 437.716119,204.488 447.3135,204.488 C452.033524,204.488 456.674811,203.976672 461.2375,202.954 Z M623.3695,162.244 L623.3695,169.088 L572.8655,169.088 L572.8655,162.244 L581.5975,161.536 L581.5975,111.74 C581.5975,104.817299 579.670186,99.4680189 575.8155,95.692 C571.960814,91.9159811 566.650867,89.9493341 559.8855,89.792 L552.0975,97.58 L551.6255,161.536 L560.3575,162.244 L560.3575,169.088 L509.6175,169.088 L509.6175,162.244 L518.3495,161.536 L517.1695,20.172 L508.2015,22.06 L505.8415,15.216 L549.5015,2 L552.8055,7.664 L552.0975,86.252 L571.2135,58.876 C586.160241,58.876 597.173465,62.4159646 604.2535,69.496 C611.333535,76.5760354 614.8735,87.5105927 614.8735,102.3 L614.8735,161.536 L623.3695,162.244 Z M670.5695,162.244 L679.3015,161.536 L678.1215,20.172 L669.1535,22.06 L666.7935,15.216 L710.4535,2 L713.7575,7.664 L712.5775,161.536 L721.3095,162.244 L721.3095,169.088 L670.5695,169.088 L670.5695,162.244 Z M820.9015,73.272 C830.498881,82.5547131 835.2975,95.7705809 835.2975,112.92 C835.2975,120.314704 833.999513,127.945294 831.4035,135.812 C828.807487,143.678706 824.992192,150.601303 819.9575,156.58 C814.922808,161.457358 809.0622,165.351319 802.3755,168.262 C795.6888,171.172681 788.648204,172.628 781.2535,172.628 C765.520088,172.628 752.854881,167.986713 743.2575,158.704 C733.660119,149.421287 728.8615,136.205419 728.8615,119.056 C728.8615,111.81863 730.19882,104.266706 732.8735,96.4 C735.54818,88.533294 739.402808,81.6106966 744.4375,75.632 C749.472192,70.7546423 755.3328,66.8213483 762.0195,63.832 C768.7062,60.8426517 775.66813,59.348 782.9055,59.348 C798.638912,59.348 811.304119,63.9892869 820.9015,73.272 Z M771.6955,141.24 C777.59553,148.634704 786.288109,153.039993 797.7735,154.456 C798.874839,149.735976 799.740164,144.465362 800.3695,138.644 C800.998836,132.822638 801.3135,128.024019 801.3135,124.248 C801.3135,109.143924 798.36353,97.9340366 792.4635,90.618 C786.56347,83.3019634 777.949557,78.9360071 766.6215,77.52 C765.520161,82.3973577 764.615504,87.7466376 763.9075,93.568 C763.199496,99.3893624 762.8455,104.109315 762.8455,107.728 C762.8455,122.674741 765.795471,133.845296 771.6955,141.24 Z M948.8135,62.888 L948.8135,70.44 L941.9695,70.676 L900.1975,167.672 L876.3615,169.088 L839.0735,70.676 L832.2295,70.44 L832.2295,62.888 L888.1615,62.888 L888.1615,70.44 L878.2495,70.676 L898.7815,143.364 L918.1335,70.676 L908.2215,70.44 L908.2215,62.888 L948.8135,62.888 Z M1038.8475,74.334 C1046.79287,84.3247166 1050.68683,97.815915 1050.5295,114.808 L985.3935,116.932 C986.494839,126.214713 989.72014,133.294642 995.0695,138.172 C1000.41886,143.049358 1007.49879,145.488 1016.3095,145.488 C1028.58156,145.488 1038.57213,142.105367 1046.2815,135.34 L1050.5295,139.116 C1045.02281,149.657386 1037.58888,157.87797 1028.2275,163.778 C1018.86612,169.678029 1008.91489,172.628 998.3735,172.628 C984.056095,172.628 972.688875,167.868714 964.2715,158.35 C955.854125,148.831286 951.6455,135.969414 951.6455,119.764 C951.6455,110.166619 953.572814,100.648047 957.4275,91.208 C961.282186,81.7679528 966.198803,73.9013648 972.1775,67.608 C976.268187,65.2479882 981.538801,63.2813412 987.9895,61.708 C994.440199,60.1346588 1000.49747,59.348 1006.1615,59.348 C1020.0069,59.348 1030.90213,64.3432834 1038.8475,74.334 Z M1015.6015,107.02 C1015.44417,96.0066116 1013.87085,87.2746989 1010.8815,80.824 C1007.89215,74.3733011 1003.64419,70.518673 998.1375,69.26 C994.204147,73.3506871 991.018179,79.0539634 988.5795,86.37 C986.140821,93.6860366 984.9215,101.198628 984.9215,108.908 L984.9215,109.616 L1015.6015,107.02 Z M1135.1355,42.238 C1138.36085,51.7567143 1141.31082,58.6399788 1143.9855,62.888 L1164.7535,62.888 L1164.7535,72.8 L1144.2215,72.092 L1143.7495,161.536 L1161.9215,162.244 L1161.9215,169.088 L1101.7415,169.088 L1101.7415,162.244 L1110.4735,161.536 L1110.0015,71.62 L1096.7855,71.62 L1096.7855,62.888 L1109.2935,62.888 C1108.03483,58.6399788 1106.89417,53.5266966 1105.8715,47.548 C1104.84883,41.5693034 1104.3375,36.4560212 1104.3375,32.208 C1104.3375,29.2186517 1104.41617,27.0160071 1104.5735,25.6 C1105.98951,21.5093129 1108.62481,17.7726836 1112.4795,14.39 C1116.33419,11.0073164 1120.66081,8.3326765 1125.4595,6.366 C1130.25819,4.3993235 1134.70281,3.416 1138.7935,3.416 C1145.7162,3.416 1152.67813,4.47798938 1159.6795,6.602 C1166.68087,8.72601062 1172.93481,11.5186494 1178.4415,14.98 L1158.8535,43.064 C1155.23482,38.9733129 1150.59353,34.4893577 1144.9295,29.612 C1139.26547,24.7346423 1133.91619,20.5653506 1128.8815,17.104 C1129.8255,24.3413695 1131.91015,32.7192857 1135.1355,42.238 Z M1257.5015,73.272 C1267.09888,82.5547131 1271.8975,95.7705809 1271.8975,112.92 C1271.8975,120.314704 1270.59951,127.945294 1268.0035,135.812 C1265.40749,143.678706 1261.59219,150.601303 1256.5575,156.58 C1251.52281,161.457358 1245.6622,165.351319 1238.9755,168.262 C1232.2888,171.172681 1225.2482,172.628 1217.8535,172.628 C1202.12009,172.628 1189.45488,167.986713 1179.8575,158.704 C1170.26012,149.421287 1165.4615,136.205419 1165.4615,119.056 C1165.4615,111.81863 1166.79882,104.266706 1169.4735,96.4 C1172.14818,88.533294 1176.00281,81.6106966 1181.0375,75.632 C1186.07219,70.7546423 1191.9328,66.8213483 1198.6195,63.832 C1205.3062,60.8426517 1212.26813,59.348 1219.5055,59.348 C1235.23891,59.348 1247.90412,63.9892869 1257.5015,73.272 Z M1208.2955,141.24 C1214.19553,148.634704 1222.88811,153.039993 1234.3735,154.456 C1235.47484,149.735976 1236.34016,144.465362 1236.9695,138.644 C1237.59884,132.822638 1237.9135,128.024019 1237.9135,124.248 C1237.9135,109.143924 1234.96353,97.9340366 1229.0635,90.618 C1223.16347,83.3019634 1214.54956,78.9360071 1203.2215,77.52 C1202.12016,82.3973577 1201.2155,87.7466376 1200.5075,93.568 C1199.7995,99.3893624 1199.4455,104.109315 1199.4455,107.728 C1199.4455,122.674741 1202.39547,133.845296 1208.2955,141.24 Z M1322.4015,95.22 L1321.4575,161.536 L1342.4615,162.244 L1342.4615,169.088 L1279.4495,169.088 L1279.4495,162.244 L1288.1815,161.536 L1287.4735,77.048 L1278.5055,79.172 L1276.1455,72.092 L1313.4335,60.528 L1321.4575,85.78 C1326.64953,75.238614 1332.31347,67.0573624 1338.4495,61.236 C1341.91085,59.977327 1346.08014,59.348 1350.9575,59.348 C1357.56553,59.348 1363.78014,60.5279882 1369.6015,62.888 L1362.0495,93.568 C1357.48681,92.6239953 1351.66554,91.7586706 1344.5855,90.972 C1337.50546,90.1853294 1331.68419,89.6346682 1327.1215,89.32 L1322.4015,95.22 Z M659.298,313.098 L659.298,333.993 L634.224,334.59 L510.048,708.312 L432.438,718.461 L351.843,437.274 L264.084,708.312 L186.474,718.461 L67.074,334.59 L42,333.993 L42,313.098 L217.518,313.098 L217.518,333.993 L188.265,334.59 L257.517,637.866 L316.023,334.59 L286.77,333.993 L286.77,313.098 L460.497,313.098 L460.497,333.993 L431.244,334.59 L502.884,637.866 L559.002,334.59 L528.555,333.993 L528.555,313.098 L659.298,313.098 Z M990.633,692.193 L990.633,713.088 L810.936,713.088 L810.936,692.193 L840.189,691.596 L812.727,593.688 L711.237,593.688 L691.536,691.596 L721.983,692.193 L721.983,713.088 L587.061,713.088 L587.061,692.193 L616.314,691.596 L750.042,317.874 L824.07,307.725 L961.38,691.596 L990.633,692.193 Z M806.16,571.599 L753.624,384.738 L716.013,571.599 L806.16,571.599 Z M1397.787,692.193 L1397.787,713.088 L1253.91,713.088 L1172.718,553.092 L1174.509,551.898 C1165.35495,552.694004 1152.42008,553.489996 1135.704,554.286 L1135.704,691.596 L1164.957,692.193 L1164.957,713.088 L1007.349,713.088 L1007.349,692.193 L1036.602,691.596 L1036.602,334.59 L1007.349,333.993 L1007.349,313.098 L1122.57,314.292 L1211.523,307.128 C1240.17914,307.128 1264.7554,312.401447 1285.2525,322.9485 C1305.7496,333.495553 1321.27145,347.624411 1331.8185,365.3355 C1342.36555,383.046589 1347.639,402.647893 1347.639,424.14 C1347.639,448.816123 1340.47507,470.307908 1326.147,488.616 C1311.81893,506.924092 1290.32714,521.649944 1261.671,532.794 L1368.534,691.596 L1397.787,692.193 Z M1135.704,531.003 C1168.73817,529.01299 1194.60791,519.958581 1213.314,503.8395 C1232.02009,487.720419 1241.373,465.930137 1241.373,438.468 C1241.373,418.965902 1236.79605,401.25508 1227.642,385.335 C1218.48795,369.41492 1205.95108,356.878046 1190.031,347.724 C1174.11092,338.569954 1156.0021,333.993 1135.704,333.993 L1135.704,531.003 Z M247.0515,969.673 L252.2835,975.559 C244.21746,989.51107 234.13506,1000.73796 222.036,1009.24 C209.93694,1017.74204 196.91157,1021.993 182.9595,1021.993 C163.339402,1021.993 147.698058,1015.39857 136.035,1002.2095 C124.371942,989.020434 118.5405,971.199112 118.5405,948.745 C118.5405,935.446934 121.265473,922.258065 126.7155,909.178 C132.165527,896.097935 139.141457,885.198044 147.6435,876.478 C155.055537,872.771981 162.79446,869.93801 170.8605,867.976 C178.92654,866.01399 186.665463,865.033 194.0775,865.033 C206.939564,865.033 218.38445,868.520965 228.4125,875.497 C238.44055,882.473035 246.506469,892.609934 252.6105,905.908 L215.0055,927.817 C211.517483,918.006951 206.830529,908.08805 200.9445,898.06 C195.058471,888.03195 189.935522,881.165019 185.5755,877.459 C179.907472,882.909027 175.05702,890.811448 171.024,901.1665 C166.99098,911.521552 164.9745,922.148945 164.9745,933.049 C164.9745,949.835084 168.680463,962.587956 176.0925,971.308 C183.504537,980.028044 193.968432,984.388 207.4845,984.388 C221.000568,984.388 234.189436,979.483049 247.0515,969.673 Z M322.5885,914.737 L321.2805,1006.624 L350.3835,1007.605 L350.3835,1017.088 L263.0745,1017.088 L263.0745,1007.605 L275.1735,1006.624 L274.1925,889.558 L261.7665,892.501 L258.4965,882.691 L310.1625,866.668 L321.2805,901.657 C328.474536,887.050927 336.322457,875.71504 344.8245,867.649 C349.620524,865.904991 355.397466,865.033 362.1555,865.033 C371.311546,865.033 379.92246,866.667984 387.9885,869.938 L377.5245,912.448 C371.202468,911.139993 363.136549,909.941005 353.3265,908.851 C343.516451,907.760995 335.450532,906.998002 329.1285,906.562 L322.5885,914.737 Z M406.9545,800.941 L448.8105,791.458 L448.8105,828.736 L406.9545,834.949 L406.9545,800.941 Z M452.0805,1006.624 L464.1795,1007.605 L464.1795,1017.088 L393.8745,1017.088 L393.8745,1007.605 L405.9735,1006.624 L404.9925,890.212 L392.5665,892.828 L389.2965,883.345 L448.4835,865.033 L453.0615,872.881 L452.0805,1006.624 Z M721.8555,1007.605 L721.8555,1017.088 L651.8775,1017.088 L651.8775,1007.605 L663.9765,1006.624 L663.9765,937.627 C663.9765,928.034952 661.524025,920.568527 656.619,915.2275 C651.713975,909.886473 644.901544,907.107001 636.1815,906.889 L624.0825,918.988 L624.0825,1006.624 L635.8545,1007.605 L635.8545,1017.088 L565.8765,1017.088 L565.8765,1007.605 L577.9755,1006.624 L577.9755,937.627 C577.9755,928.034952 575.523025,920.623026 570.618,915.391 C565.712975,910.158974 558.900544,907.434001 550.1805,907.216 L539.3895,918.007 L538.0815,1006.624 L550.1805,1007.605 L550.1805,1017.088 L479.8755,1017.088 L479.8755,1007.605 L491.9745,1006.624 L490.9935,889.558 L478.5675,892.501 L475.2975,882.691 L526.9635,866.668 L538.4085,903.292 L565.5495,864.379 C582.335584,864.379 595.360954,867.757966 604.626,874.516 C613.891046,881.274034 619.831487,891.737929 622.4475,905.908 L651.5505,864.052 C671.6066,864.052 686.375953,868.956951 695.859,878.767 C705.342047,888.577049 710.0835,903.836896 710.0835,924.547 L710.0835,1006.624 L721.8555,1007.605 Z M749.9775,800.941 L791.8335,791.458 L791.8335,828.736 L749.9775,834.949 L749.9775,800.941 Z M795.1035,1006.624 L807.2025,1007.605 L807.2025,1017.088 L736.8975,1017.088 L736.8975,1007.605 L748.9965,1006.624 L748.0155,890.212 L735.5895,892.828 L732.3195,883.345 L791.5065,865.033 L796.0845,872.881 L795.1035,1006.624 Z M980.8395,1007.605 L980.8395,1017.088 L910.8615,1017.088 L910.8615,1007.605 L922.9605,1006.624 L922.9605,937.627 C922.9605,928.034952 920.290027,920.623026 914.949,915.391 C909.607973,910.158974 902.250547,907.434001 892.8765,907.216 L882.4125,918.007 L881.1045,1006.624 L893.2035,1007.605 L893.2035,1017.088 L822.8985,1017.088 L822.8985,1007.605 L834.9975,1006.624 L834.0165,889.558 L821.5905,892.501 L818.3205,882.691 L869.9865,866.668 L881.4315,903.292 L908.5725,864.379 C929.282604,864.379 944.542451,869.283951 954.3525,879.094 C964.162549,888.904049 969.0675,904.054898 969.0675,924.547 L969.0675,1006.624 L980.8395,1007.605 Z M1123.4115,1000.084 L1075.3425,1022.647 C1069.45647,1018.50498 1065.42351,1012.83704 1063.2435,1005.643 C1055.39546,1010.43902 1047.49304,1014.36298 1039.536,1017.415 C1031.57896,1020.46702 1024.65753,1021.993 1018.7715,1021.993 C1009.83346,1021.993 1002.53053,1018.83203 996.8625,1012.51 C991.194472,1006.18797 988.3605,998.122049 988.3605,988.312 C988.3605,983.951978 988.850995,979.210526 989.832,974.0875 C990.813005,968.964474 992.066492,964.877015 993.5925,961.825 L1062.9165,950.707 L1063.5705,941.224 C1064.0065,931.413951 1061.93552,923.729528 1057.3575,918.1705 C1052.77948,912.611472 1045.36755,909.832 1035.1215,909.832 C1030.54348,909.832 1025.74753,910.322495 1020.7335,911.3035 C1015.71947,912.284505 1011.46852,913.537992 1007.9805,915.064 L1002.7485,926.182 L993.9195,922.912 L1008.9615,875.824 C1025.74758,868.629964 1041.66142,865.033 1056.7035,865.033 C1072.18158,865.033 1084.82545,869.120459 1094.6355,877.2955 C1104.44555,885.470541 1109.3505,898.277913 1109.3505,915.718 L1109.0235,922.258 L1105.7535,966.403 L1105.0995,978.175 C1105.0995,982.09902 1105.4265,985.205489 1106.0805,987.4945 C1106.7345,989.783511 1107.82449,992.126988 1109.3505,994.525 L1119.4875,990.601 L1123.4115,1000.084 Z M1061.2815,994.525 L1060.9545,987.658 L1061.2815,980.464 L1062.2625,961.825 L1037.0835,967.711 C1036.2115,970.545014 1035.7755,974.359976 1035.7755,979.156 C1035.7755,985.696033 1037.08349,990.546484 1039.6995,993.7075 C1042.31551,996.868516 1045.47648,998.449 1049.1825,998.449 C1052.67052,998.449 1056.70348,997.141013 1061.2815,994.525 Z M1128.9705,1007.605 L1141.0695,1006.624 L1139.4345,810.751 L1127.0085,813.367 L1123.7385,803.884 L1184.2335,785.572 L1188.8115,793.42 L1187.1765,1006.624 L1199.2755,1007.605 L1199.2755,1017.088 L1128.9705,1017.088 L1128.9705,1007.605 Z M1265.166,910.486 C1269.85302,915.282024 1276.99245,920.949967 1286.5845,927.49 C1298.35656,935.55604 1307.29447,942.858967 1313.3985,949.399 C1319.50253,955.939033 1322.5545,964.004952 1322.5545,973.597 C1322.5545,982.099043 1320.04753,990.055963 1315.0335,997.468 C1310.01947,1004.88004 1302.93455,1010.82048 1293.7785,1015.2895 C1284.62245,1019.75852 1274.15856,1021.993 1262.3865,1021.993 C1251.05044,1021.993 1240.31405,1019.26803 1230.177,1013.818 C1220.03995,1008.36797 1212.57352,1001.39204 1207.7775,992.89 L1235.8995,970.327 C1244.61954,986.677082 1253.55745,1000.08395 1262.7135,1010.548 C1266.41952,1007.71399 1269.52599,1004.38952 1272.033,1000.5745 C1274.54001,996.759481 1275.7935,992.999019 1275.7935,989.293 C1275.7935,983.188969 1273.55902,977.902522 1269.09,973.4335 C1264.62098,968.964478 1257.69955,963.569032 1248.3255,957.247 C1240.69546,952.232975 1234.59152,947.873019 1230.0135,944.167 C1225.43548,940.460981 1221.56602,935.992026 1218.405,930.76 C1215.24398,925.527974 1213.6635,919.642033 1213.6635,913.102 C1213.6635,905.03596 1216.33397,897.297037 1221.675,889.885 C1227.01603,882.472963 1234.48245,876.478023 1244.0745,871.9 C1253.66655,867.321977 1264.56644,865.033 1276.7745,865.033 C1286.14855,865.033 1295.03196,867.04948 1303.425,871.0825 C1311.81804,875.11552 1318.63047,880.183969 1323.8625,886.288 L1298.3565,911.467 C1287.89245,898.168934 1276.33856,886.288052 1263.6945,875.824 C1259.98848,880.620024 1258.1355,886.832962 1258.1355,894.463 C1258.1355,900.349029 1260.47898,905.689976 1265.166,910.486 Z"/>
          </mask>
        </defs>
        <rect x="0" y="0" width="1440" height="1024" />
      </svg>

      <Video autoPlay loop muted className={styles.introductionVideo}>
        <source src="video/introduction.webm" type="video/webm" />
        <source src="video/introduction.mp4" type="video/mp4" />
      </Video>
    </section>
  );
}

export default Introduction;
