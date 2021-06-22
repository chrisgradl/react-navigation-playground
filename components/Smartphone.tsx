import React, { useState } from "react";
import { ImageBackground, View } from "react-native";

const defaultHeight = 793;

const Smartphone: React.FC = ({ children }) => {
  const [factor, setFactor] = useState(1);

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        const ratio = height / defaultHeight;
        setFactor(ratio);
      }}
    >
      <ImageBackground
        style={{
          height: 793 * factor,
          width: 380 * factor,
        }}
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAAX0CAMAAADAMV7JAAAAnFBMVEUAAAAkJCQkJCQkJCQkJCQnJyclJSUmJiYkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQxMTEkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT39/cvLy8kJCQmJiawrrN3b4QsLCw9PT24uLhPS1QuLi4tLS0qKiooKCgAAwqgAAAAJnRSTlMAUDCy/AYSCyjq28OQq9Rv9uIaAobxYSKid1VJPZw2y7uXfmhcQum3uOsAABwWSURBVHja7N3bcrIwFAXgjYKoIGo9V61a23FnhgsO7/9u/1+gWs9akkpwfQ/ghayJKzuApJ49qnwaw/a7667m43GrCk+pNV65/ffJevhhfNZt0plVN9r98bI5YIBDA28576+nlRppxZ6t3WXTZICrutX+64g0YM/aYw+hhvsMHHdYsaiw7GnfQarhtzrVdp0K6A2xhvy6K6NQO0xrOm/wJUKIOI6jlA9PKfoSfxGCLzCd9woVgmW0OucSHf8PcrgBOBKE/v+cn8u413785KTiNk6GOooQabhFGJ0MuFk1LHocu+3xkTjyNwB3CU7lu+FW6DFG7uA41sEG4HfC43gvPnr052ZV86CDINaQWxTzvubQoj81cw5zvQGQVL4Pwr3+w3C/LZFrUCiM+afuX4W7XkUPAdUisRfutkXK2a7JOzFGfKBIEPEP3owUGzZ4J8aCDQfULd3zGilUd3gHDRuU8wVvNT5Ild6kg2DDZUrDvRyREiOHt+INgHqH4e5MLJJv3UHHhseIeGvxQpLZY/4mMBWBvxbvGvcnSTXyULLhkULBGXNCEk0HnBHoIvAYu1bSskmWCZZseLxAcMarkxQ9Fy0bCiHizMAgCawWJn5QED5/a1NuNQdlBApjV0recyd7wRmUESiCmDMu5WIvMBmBYok4M+/lSbbDKbGB/IIQr66QINxmG8kuhkjgFnc5wtydpLfEaESaQODeMmmCvHvJFS6FzIuB+yblCfLNANu4EPIIZjzFoSDbpkH3M0wkW5qI92HeJCvbgwrdq9LBDlIeZsayrSbb3Rrdx/aQbAVbesbISXq2HYvussIvp0Q+H9pAbuGvRoAGTtdlihBtFSJOTel2Lw1UQqzaxRdzovFyx1kNhiNSBejaaghOLHt0owmWFskEJiRKBJya0G3eTBRtySL0kS0VVa9Tp1v0PKwsCZxGaiCr2w7dYo06qIDAPSQpRV/smq6rNTDRViHGmi3frm4PXugqF9+/GmESboElW82aMaZr6ibqiDr4KVSAU290xRLTEdCLf9tOcoqNDuhGcOKVLrGa2EOCbgJONC26YI09JOgnvj4A7DVxWAYaur5sG1i0QUc+Jz7oLAeDP9BStmz36Iw3LNqgp+jKkKSFpg2a4sSCThuZWLRBU9HFI8kVFm3Q1qU3XNY6OIgEbaWz7U6NTmjjIBL0FVx4lGyBRRs0JtL5Hx0b4ZY/0Fl4diP5jk0kaE2ce5eUhz4CWkvnf40eHahgEwl6C868Jq2P20dAc+L0Q5JdnESC5tJGMjhoJDP0EdAeJ2a0x0UfAe2ljaRPezz0EdBe2kg8+qmGPgL6Czgxoh9e0UegBMTx478rnNdACcT8pUU/NFG1oQT89ECSdl5QtaEUOFGnrY9nqtp+LNJXpuImx/JJy/aQtubPU7V9wVsC4S6btGyPD0/Z/U35xfi7pFJLy3Z3V7Wf5lbtdMnGf2+UFydqlJk+S9UWzMh2uXHikzKTJ7nIaRvBXziWWbz/8O/4Oa5xwCfd/TH/2Lu7lYaBIArAY+2fVmv9KQWpCqJwFnqRJu//bmZWKgotNK4anHO+B+hFc7KZzE6Sfqgze5T6633kE8ddZAOULttVg37oC0+d7iPn9u52wbFhg/1Sl/+tXyn8MSoHN5xYNkUrfoPkYC6Pzwv6o+/UHgnZgGrsrwEKK5IGvQtfNRZLcPeWPXM0SMqjndC78EfpZ1sklxwNkoQDmn9TjxBcW4vVcA+WnXO8EU2rNoUN3MyyBYD4d5Exau3w19ZiFdyZuQlaBNGuizskFb5B9cgfQzYi6v0dLpW7nB290cMix0K2stYry3qQysvXKqGQCu3fluDW1nph+du22Kvrr/RFK3anxjbT3J8m/zg0cFfWuuA5wprXJlDD3RHt2LhKLYf4Po21zpiGE5LW7Og2cKdEm5F7+neJ5HzmsoWbWWsJgKGtvVM3yBoFO6Qt3NxaQ7JoOz2OFVcFd21mIxBGWwKDWxKNkAgLuKGZjRVtCQXZhOnVUcIB2Zho8E9IILsxG2hXTkL5iPajoi2hIFuZrRVtCQXZlOg1rUIi7aJ9omhLKAluoGhLNIq2BKVoS1CKtgSlaEtQirYEpWhLUIq2BKVoS1CKtgSlaEtQirYEpWi/sUsHMgAAAACD/K3v8RVDTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzVTs0sEJgEAQALFuFBTF/quzhoN7LENSQ9QmSm2i1CZKbaLUJkptotQmSm2i1CZKbaLUJkptotQmSm2i1CZKbaLUJkptotQmarH2A2N8O2tfLwxxn1trHzCE2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpzc8uHcgAAAAADPK3vsdXDE2pzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2rFLBzIAAAAAg/yt7/EVQ0ypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqU3s0oEMAAAAwCB/63t8xdCU2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqR27dCADAAAAMMjf+h5fMcSU2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNrELh3IAAAAAAzyt77HVwxNqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNqxSwcyAAAAAIP8re/xFUNMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKlN7NKBDAAAAMAgf+t7fMXQlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKkdu3QgAwAAADDI3/oeXzHElNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaxC4dyAAAAAAM8re+x1cMTanNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTasUsHMgAAAACD/K3v8RVDTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypTezSgQwAAADAIH/re3zF0JTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypHbt0IAMAAAAwyN/6Hl8xxJTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2sQuHcgAAAAADPK3vsdXDE2pzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2kypzZTaTKnNlNpMqc2U2rFLByUAgFAAxRKp/duZQfDweWwZRpTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTdP+W/vAFOuxNjSoTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNpEqU2U2kSpTZTaRKlNlNqXfTvWTRgGAjBsVRUw04GhUrcqPsnD2X7/d2tFK2gIVYkTJ+f0/2cEEnyczgnQRoM2bTRoL59qR3eCdqPFkLL4H0lOIXZ0CdoNFvqo+8BDR+eg3VhxyHrIm+n9GbRbSpP4h5LEAg7tdgriRyRsJtBuoy/Y4H44aLdREl+QpI6gbbkod9jmFLS7pCHle4/iRAltu2n2N+Wkv50zh4/lQAlto6Vbq/GPEX+rm60E2hZT6bsO3QOFvm5hcEPbXKE/f0tnPddKoG2sPIBdiDt3BG1DyQB2CW4+CmgbS2XquqzCwg1te6m/FubY1bENbRNFf0lmWmq4fQNtA8XZrksnbEPbUDqjx8hOAm0z6aynPxVsQ9tIcpFt8/n+YdA2KhHb0LZQruBQuC8J7dULVSas8HsSaK+cVtodhKMktMfWBkFl3Yb2qqVq91ci/02A9oppRX+JlQTa6yU1L2RkVhJor1Xw33VV4irJdNqv0LZo7/rNoVLa79AuKdW+r5I5SU4aOgfn3qBdUvVznjK2J300J+eeoF1QGszUFl9im/lzR+cO0C7ozkht8jW2mD+3c+7E+2d0ojK2p9DeO3eE9vhkkYHKte0Jb9uLcztoj06XmaeJW5LFtJ+dc3tojy4vtAXzw+0P9s62KY0gCMKt4UUwRAiIbwgx0arZqvtwt/v//1sQyCWAhJ3huNxd+vmuVK1dPT0zu2g+tSGAMaVdWckFNpLWknqLJbcsekqyAzf+6vtBTWJ9aH0s6fP0lITS2jvHRGKU9jWWXPMajpLyhnKeicR4Zp+wZMDhqY704OCizh/VGNbSfsaSz5S2Dl/iuNlxa2P780yw5IFxTkc4HIBr/VkNYX1kN1gy5eHpKPORQMKwbZP2I8C3CFrSUtXGsG3LcG8Ab7XqjbTMA3N8R2Z9icD7UVp8qfE3sI+03mkFxkOWvOqKzbOPtGxseljxhSWvuhEh4cVWy4FdA9zZqCn3XkfGEYl5YwN8Z8nT8Het1f3jak+Qdx6w4pElr8Jao7QtefECK654eJUda3OwbZ39rWi3KO140pL7OkdpG56PtQHwxraSrGxp8zWCfkDSx4ZPHJFQ2g3ByzsDbJhwREJpNwSXD0hWXLCPpLQbgqyYYUOHnQrbyGaQrrvILgCu2jn8axKJvLNAzjPDdmV3KFzZ6HeRL8h55T6yslqjtPXx7RUb+G2tFU4IKaVt2kXmjNiF81JrA/D5Ze2cAcM2nyI0gJAvbHJuWPUqKjY+INMgedTOueKEqaIRgc9+1eu0Vgd/8oXeUM3GjmNtdUG9xhYTNiuVfEHG92PWCyQ5c5pDJb+Hz3NAoq6nl9hmxERSRbnx6yzVf5gRdvhMd6hiSOC/RVD7wAt2mDHT8avj683Gct6ww7jHysd/+FFrwjqPjLHLM/0hlqSsiVwqnGpri+kEe8yY6iqXSJhH9IZzh32+sPZVLZEwjygI2/sa3iMxkZUTFBLOR9SldIoP6AzZSMYipdi2Yx7RmvawiyVsJO34Mmw7Ee5rtG7zjA+5ZDteKdumaevNZo6PWXAjWSHbpmnrveYbDjClbUcju5Zaw09oED7fRH5Mu0fbjiXI9mCufh/QKJy8s8BBbmjbsaSytZKs3e9vFomseMRB2iPadiz+vJ2kY9JWn1Z/jMP8oG1XQ3xe+AZBfVpTgLZd5EpSsnr97gYiK0Zt/I0py2A04WxxOBX2kApChGkD4z6bl2jkXKnBcfCnN4IFjvBKu4gmO5O5BsYRgxHMcITxgp1kNP4s2g7C6Yh+8DfAUeYt1sJo3BlU6IXTEX0sHH7FcT4zksQjhWvbC4O2ocZNEEF3xKCnituFWkEQBm1DHBl1EcMT66FJ21T2P0DWXCCOe0YSnW0U5gVOhI/YDVZwj0g6PXbolnAs2ckVgMMRy9mPOojllbfObNr2Vfg9/w+ZrHlCPAPGbVMmEWd2g9QJ04gtaL9AQbfPuG3TtnirZVPZxs6k34WGyyG1bUvJ4jLDzzsRzkZsLeTtFXRMmfoMcSIXt13Yjg2Ors49Qss9q6OKIBZx58LmNVajsidQ075mfdQH7hwXWe68E2HMtp/2tzH0dPrUtoo0yBbhqE6T3Z9gGFE2N/0OLNz1qG2bleQEf1CsqQ8iQss+Sdm9O9iYD6ltJV72CN7vnF/mf8uaa5oTLOT2ElYuWvQTUyrZxzkXljjnZAOzyKnKHr4BJ2iblmIR92Eo7MKU3XoETtI2h1IGcVPYCoyZr/UKUNvlkziJxDHsqQj7nm3XNtdkJryL0DWDnnHrO3zC6cx6HE4ZSYKTg7jA8zTf1bmdoQiu+twC20l8cPuq9pT1KZcZenMUQ2chGxwn3DbSLEsS75Mky5jrTr6CtviKougOuFggRorfhg26KJCbFo2bGCjeslsPKJb5iPcuyT8jyC96Tyiazided/jZzt3tJggEUQDeVlGQXykgAipgTYaEC9l9/3frRRtCXWK0ykLj+Z7hZDPJzFkYR02t3GcDcEPsGUAhuavhuWwYmxxLNFBGLiE5OhtMFCLcoFAjqOWVGhuQb2NNDArIlzizDRtYdsDRGqjAqWOVMgWSNS7XYGCNoI6w1JgS2tagLoEtDjzTmVNXGCyYMkt3TUg3DOHMK+ry2mArokUrqd6KuRseVAv6zWiDrdBHYuIEGZ6nkcsbTrRk49AtgySCYziB+5z7ShtzO2Mj0pJ8TrJK8BoBhxs0vL+KdHB9Njb/aLbplhPOa0zg0KOpuRAV9VsFOpsG/yi/3fIHM/xHDS+IfxNCVBVd5QR7NiXLN8shgMeEdjT+HNLDj+IVAfyNMdtmGpuuRVrODAK4x9wpoqlM19f5qVuYCDjcEmq7TPQpP9Z9FvvEtWxzPSeAC56T78ro9O9CfWGxeT8lkRtYVrGLY3sGr8e2411hWUHpfqaZ7qtI9Bea8QXcA6kcVQAAAABJRU5ErkJggg==",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 100 * factor,
            paddingBottom: 90 * factor,
            paddingHorizontal: 20 * factor,
          }}
        >
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Smartphone;
