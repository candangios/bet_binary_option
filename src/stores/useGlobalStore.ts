// import utils from '../utils';
// import Contract from '../contracts';

import createStoreHook from "./createStoreHook";

interface User {
  address: String,
  isLogon: Boolean,
  isShowLoginModal: Boolean,
  isShowAccountModal: Boolean,
  isShowJoinStakePoolModal: Boolean,
  isShowManageStakeModal: Boolean,
  isShowWithdrawModal: Boolean,
  isShowHelpModal: Boolean,
  isShowErrorModal: Boolean,
  isShowChatBox: Boolean,
  isShowDonateForPrizePoolModal: Boolean,
  isShowSettingModal: Boolean,
  isAutoRoll: Boolean,
  isRolling: Boolean,
  errorMessage: String,
  changeToUpdateBalance: Number,
  changeToUpdateStake: Number,
  currentPrize: Number,
  balance: Number
}

const use = createStoreHook<User>({
  address: '',
  isLogon: false,
  isShowLoginModal: false,
  isShowAccountModal: false,
  isShowJoinStakePoolModal: false,
  isShowManageStakeModal: false,
  isShowWithdrawModal: false,
  isShowHelpModal: false,
  isShowErrorModal: false,
  isShowChatBox: false,
  isShowDonateForPrizePoolModal: false,
  isShowSettingModal: false,
  isAutoRoll: false,
  isRolling: false,
  errorMessage: '',
  changeToUpdateBalance: 0,
  changeToUpdateStake: 0,
  currentPrize: 0,
  balance: 0,
});

export default function(){
  const [store, setUser] = use();
   function showError(msg: String) {
    setUser((old_user) => ({
      ...old_user,
      errorMessage: msg,
      isShowErrorModal: true,
    }))
  }

  async function updateBalance() {
    if (store.address) {
      // Contract.get.balance(store.address).then((v: any) => {
      //   setUser((old_user) => ({
      //     ...old_user,
      //     balance: utils.toTOMO(v),
      //   }))
      // });
    }
  }
  return{
    store,
    showError,
    updateBalance
  }
};