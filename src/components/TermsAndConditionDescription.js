import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../utils/theme';

const Container = styled.section`
  color: white;
  padding: 4% 8%;
  .content {
    @media only screen and (max-width: 600px) {
      padding: 2rem;
    }
  }
  h1 {
    font-family: ${theme.primaryFont};
    font-weight: ${theme.fontLarge};
  }
  .content h1 {
    margin-bottom: 0.4em !important;
  }
  .content {
    font-family: ${theme.secondaryFont} !important;
    font-weight: ${theme.fontLite};
  }
  .content ol {
    margin-left: 0em;
    margin-top: 0em;
  }
  .list-heading {
    font-weight: ${theme.fontLarge};
    color: ${theme.textColorBlack};
  }
  .list-style-alphabet {
    list-style-type: lower-alpha;
  }
  .list-style-lower-roman {
    list-style-type: lower-roman;
  }
  li {
    margin-left: 1rem;
  }
  .inner-list-style {
    margin-left: -1rem !important;
  }
  .content ul {
    margin-left: 0em;
    margin-top: 0em;
  }
`;

const Heading = styled.h1`
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem !important;
  }
`;

const ListStyled = styled.ol`
  font-weight: ${theme.fontLarge};
  li > * {
    font-weight: ${theme.fontLite};
  }
`;

const TermsAndConditionMain = () => (
  <React.Fragment>
    <Container className="section">
      <div className="container is-size-6">
        <div className="content is-size-5">
          <Heading className="has-text-black is-size-1">
            DexWallet Terms & Conditions of use
          </Heading>
          <p>
            Dexlab Sagl, a wholly owned entity of Dex Ventures Ltd, recommends
            that you shall carefully read and understand the whole contents of
            this Terms of Service agreement before you use the product
            (“DexWallet”).
          </p>
          <p>
            This DexWallet Terms of Service Agreement (“Agreement”) is made
            between you (“you” or “User”) and Dexlab Sagl (“Dexlab” or “we”) and
            is legally binding between you and Dexlab. Dexlab hereby reminds you
            that you must carefully read the full content of this Agreement and
            other documents mentioned in this Agreement before using DexWallet
            (“Wallet” or “App”). You must make sure that you fully understand
            the whole Agreement and evaluate the risks of using DexWallet on
            your own.
          </p>

          <ol>
            <div className="list-heading">
              I. Confirmation and Acceptance of this Agreement
            </div>
            <li>
              You understand that this Agreement and other relevant documents
              apply to DexWallet and any Decentralized Applications (“DApps”)
              developed by Dexlab (excluding DApps developed by third parties).
            </li>
            <li>
              After you download DexWallet and start to create or import a
              wallet, you are deemed as having read and accepted this Agreement,
              which shall cause this Agreement to become effective and legally
              binding on both you and Dexlab immediately.
            </li>
            <li>
              Dexlab may, at its sole discretion, modify or replace this
              Agreement at any time. The modified Agreement will automatically
              take effect once posted, and you will be notified accordingly. If
              you do not agree with any modifications, you shall cease to use
              DexWallet immediately. Use of DexWallet by you after any
              modification to this Agreement constitutes your acceptance of this
              Agreement as modified.
            </li>
            <li>
              If you are under 18 years old or you are a person of no capacity
              for civil acts or a person of limited capacity for civil acts,
              please use DexWallet under the guidance of your parents or
              guardians.
            </li>
          </ol>

          <ol>
            <div className="list-heading">II. Definition</div>
            <li>
              DexWallet: blockchain wallet developed by Dexlab, based on
              Ethereum and other blockchains which Dexlab may support in the
              future, and other supporting tools which are developed for the
              convenience of Users.
            </li>
            <li>
              User: natural person who possesses full capacity for civil acts;
              if you are under 18 years old, please use DexWallet under the
              guidance of your parents or guardians.
            </li>
            <li>
              Wallet PIN: means the Pin Code you set when you create the wallet.
              The PIN will be used to encrypt and protect your Private Key.
              DexWallet, as a decentralized application, will not store your PIN
              on our servers, nor will your PIN be stored in your own mobile
              devices. If you lose or forget your PIN, you will have to reset
              the PIN with your Private Key or Mnemonic Words.
            </li>
            <li>
              Alert: messages displayed on DexWallet’s interface which provides
              suggestions for Users on subsequent operations.
            </li>
            <li>
              Private Key: is the core for the User to hold and use Tokens. Each
              User is responsible to securely store his/her private key to
              prevent any third party to access the tokens contained.
            </li>
            <li>
              Public Key: derived from the Private Key based on cryptography and
              is used to generate wallet addresses. A wallet address is a public
              address for reception of Tokens.
            </li>
            <li>
              Mnemonic Words: consists of 12 (or 18/24) words which are randomly
              generated, based on an industry standard for encryption. It is a
              human readable format of words to back-up your Private Key for
              recovery. 9. Keystore: Private Key or Mnemonic Words in the format
              of a file which is encrypted and protected by the User’s Wallet
              Password. Keystore is stored only in your mobile device and will
              not be synchronized to Dexlab’ servers.
            </li>
            <li>
              Personal Information: information recorded in electronic or any
              other form which may identify a natural person when used alone or
              in combination with other information, including but not limited
              to name, date of birth, personal identification information,
              address, telephone number, e-mail address, wallet address, mobile
              device information, operation record, transaction record, but
              excluding Wallet PIN, Private Key, Mnemonic Words and Keystore.
            </li>
          </ol>

          <ol>
            <div className="list-heading">III. Services</div>
            <li>
              Create or import wallet. You may use DexWallet to create a new
              wallet or import wallets generated by other wallet application.
              You may only import wallets with Tokens which are supported by
              DexWallet.
            </li>
            <li>
              Transfer and receive Tokens. You may manage your digital Tokens by
              using the transfer and receive functionalities of DexWallet. The
              actual transfer of Tokens happens on the blockchain (not on
              DexWallet).
            </li>
            <li>
              Quotation. You may use DexWallet to observe the quotation of the
              Tokens supported by DexWallet. The quotation of each Token is
              captured by DexWallet from corresponding exchanges.
            </li>
            <li>
              Manage Tokens. You may use DexWallet to add, manage or delete
              Tokens supported by DexWallet.
            </li>
            <li>
              Browse DApps. Users may in the future use DexWallet to visit and
              use services provided by DApps (developed both by Dexlab and third
              parties).
            </li>
            <li>
              Transaction records. We will copy all or part of your transaction
              records from the blockchain system.
            </li>
            <li>
              Irrevocability of service. You understand that we are not able to
              reverse or cancel the transaction because transactions based on
              blockchain technologies are irrevocable.
            </li>
            <li>Other services that Dexlab would like to provide.</li>
          </ol>

          <ol>
            <div className="list-heading">
              Users who use DexWallet must understand that:
            </div>
            <li>
              In order to keep the decentralization feature of blockchain and to
              protect the security of your digital Tokens, Dexlab offers a
              decentralized service. Dexlab DOES NOT:
              <ol type="a" className="list-style-alphabet inner-list-style">
                <li>
                  store Users’ Wallet PIN (the PIN Users set when creating or
                  importing wallets), Private Key, Mnemonic Words
                </li>
                <li>
                  restore Users’ Wallet PIN, Private Key, Mnemonic Words or
                  Keystore;
                </li>
                <li>freeze the wallet;</li>
                <li>restore the wallet;</li>
                <li>rollback transactions.</li>
              </ol>
            </li>
            <li>
              Users shall take care of their mobile devices, back up the
              DexWallet App, and back up the Wallet PIN, Mnemonic Words, Private
              Key and Keystore by themselves. If your mobile device is lost,
              your DexWallet App or your wallet is deleted and not backed up,
              your wallet is stolen or you forget your Wallet PIN, Private Key,
              Mnemonic Words or Keystore, Dexlab will not be able to recover the
              wallet or restore Wallet PIN, Private Key, Mnemonic Words or
              Keystore. Nor can Dexlab cancel transactions for the mishandling
              of Users (such as typing in wrong addresses for transactions).
            </li>
            <li>Dexlab does not support all existing Tokens.</li>
            <li>
              DApps integrated into DexWalet may include those developed by
              Dexlab and by third parties. DexWallet only acts as a blockchain
              browser for those third-party-developed DApps. Users shall, at
              their sole discretion, decide whether there would be any risks to
              accept the services provided by or to conduct transactions on
              third-party DApps.
            </li>
          </ol>

          <ListStyled>
            <div className="list-heading">IV. Your Rights and Obligations</div>
            <li>
              <div className="list-heading">Create or Import Wallet</div>
              <ol type="a" className="list-style-alphabet inner-list-style">
                <li>
                  Create or import wallet: you shall use your mobile device to
                  create and/or import wallet, set Wallet PIN and use your
                  wallet on DexWallet to transfer and receive Tokens on
                  blockchain.
                </li>
                <li>
                  Dexlab may develop different versions of DexWallet for
                  different terminal devices. You shall download and install the
                  applicable version. If you download and install DexWallet or
                  other application with the same name as “DexWallet” from any
                  unauthorized third party, for which Dexlab cannot guarantee
                  the operation or security.
                </li>
                <li>
                  A previous version of DexWallet may stop to operate after a
                  new version is released. Dexlab cannot guarantee the security,
                  continuous operation or customer services for previous
                  versions. Users shall always download and use the latest
                  available version.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <div className="list-heading">Use of DexWallet</div>
              <ol type="a" className="list-style-alphabet inner-list-style ">
                <li>
                  Users shall take care of their mobile devices, Wallet PIN,
                  Private Key, Mnemonic Words and Keystore by themselves. Dexlab
                  does not store or hold the above information for Users. You
                  shall be responsible for any risks, liabilities, losses and
                  expenses which result from frauds, you losing your mobile
                  device, disclosing (whether actively or passively) or
                  forgetting Wallet PIN, Private Key, Mnemonic Words or
                  Keystore, or your wallet being attacked.
                </li>
                <li>
                  Follow the Alert. You understand and agree to follow any Alert
                  may be pushed by DexWallet. You shall be responsible for any
                  risks, liabilities, losses and expenses which result from your
                  failure to comply with such alerts.
                </li>
                <li>
                  You understand that DexWallet undertakes no responsibility to
                  conduct due diligence on the services or transactions provided
                  by third-party-developed DApps. You shall make investment
                  decisions rationally and assume the risks by yourself.
                </li>
                <li>
                  Transfer of Tokens
                  <ol
                    type="lower-roman"
                    className="list-style-lower-roman inner-list-style "
                  >
                    <li>
                      You understand that blockchain operations are
                      “irrevocable”. When you use DexWallet to transfer Tokens,
                      you shall be responsible for the consequences of your
                      mishandling of the transfer (including but not limited to
                      wrong address, problems of the node servers selected by
                      you).
                    </li>
                    <li>
                      You understand that the following reasons may result in
                      “transfer failed” or “mining overtime”
                      <ul className="inner-list-style">
                        <li>insufficient balance in wallet;</li>
                        <li>insufficient gas for transaction;</li>
                        <li>
                          blockchain’s failure to execute the code of smart
                          contracts;
                        </li>
                        <li>technical failure of the network or equipment;</li>
                        <li>
                          abandoned transactions result from blockchain network
                          congestion or failure;
                        </li>
                        <li>
                          the wallet address of yours or your counterparty’s is
                          identified as special addresses, such as high-risk
                          address, exchange address, ICO address, Token address
                          etc.
                        </li>
                      </ul>
                    </li>
                    <li>
                      You understand that DexWallet is only a tool for transfer
                      of Tokens. Dexlab shall be deemed to have fulfilled its
                      obligations once you have finished the transfer and shall
                      not be held liable for any other disputes.
                    </li>
                  </ol>
                </li>
                <li>
                  Compliance. You understand that you shall abide by Swiss laws,
                  regulations and policies when you use DeXWallet or the DApps
                  on DexWallet.
                </li>
                <li>
                  Notifications. DexWalet may send notifications to you, which
                  you shall be timely aware of timely.
                </li>
                <li>
                  Service fees and taxes.
                  <ol className="list-style-lower-roman inner-list-style">
                    <li>
                      DexWallet does not charge you any service fees or handling
                      fees for the time being. DexWallet may reach an agreement
                      with you or announce new rules regarding service fees in
                      the future;
                    </li>
                    <li>
                      You need to pay gas when you transfer Tokens, the amount
                      of which would be on your sole discretion and would be
                      collected by certain blockchain system;
                    </li>
                    <li>
                      You understand that under some specific circumstances,
                      your transfer of Tokens may fail due to unstable network,
                      but you may still be charged gas by certain blockchain
                      system;
                    </li>
                    <li>
                      You shall bear all the applicable taxes and other expenses
                      occurred due to your transactions on DexWallet.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ListStyled>
          <ol>
            <div className="list-heading">V. Risks</div>
            <li>
              You understand and acknowledge that the blockchain technology is a
              field of innovation where the laws and regulations are not fully
              established. You may be faced with material risks including
              instability of technology or failure of Tokens redemption. You
              also understand that Tokens have much higher volatility comparing
              to other financial assets. You shall make investment decisions and
              hold or dispose of the Tokens in a reasonable way and
              corresponding to your financial status and risk preferences. You
              also acknowledge that the market information is captured from
              exchanges by DexWallet and may not represent the latest or the
              best quotation of each Token.
            </li>
            <li>
              If you or your counterparty fails to comply with this Agreement or
              fails to follow the instructions, tips or rules on the website or
              on the page of the transaction or payment, DexWallet does not
              guarantee successful transfer of the Tokens and DexWallet shall
              not be held liable for any of the consequences of such failure. If
              you or your counterparty has already received the payment in
              DexWallet or third-party wallet, you understand that transactions
              on blockchain are irreversible and irrevocable. You and your
              counterparty shall assume the liabilities and consequences of your
              transactions.
            </li>
            <li>
              When you use third-party-developed DApps integrated in DexWallet,
              Dexlab strongly suggest you read this Agreement carefully, get
              familiar with the counterparty and the product information and
              evaluate the risks before you make transactions on such DApps. You
              understand that such transactions and corresponding contractual
              relationship are between you and your counterparty. DexWallet
              shall not be held liable for any risks, responsibilities, losses
              or expenses may occur due to such transactions.
            </li>
            <li>
              It is your sole responsibility to make sure that your counterparty
              is a person with full capacity for civil acts and decide whether
              you shall transact with him/her.
            </li>
            <li>
              You shall check the official blockchain system or other blockchain
              tools when you receive Alert such as “transaction failed” in order
              to avoid repetitive transfer. If you fail to follow this
              instruction, you shall bear the losses and expenses occurred due
              to such repetitive transfer.
            </li>
            <li>
              You understand that after you create or import wallet on
              DexWallet, your Keystore, Private Key and Mnemonic Words are only
              stored on your mobile device and will not be stored in DexWallet
              or on the servers of Dexlab. You may change another mobile device
              to use DexWallet after you backed-up your wallet. If you lose your
              mobile device before you could write down or backup your Wallet
              PIN, Private Key, Mnemonic Words or Keystore, you may lose your
              Tokens and Dexlab is unable to restore them. If your Wallet PIN,
              Private Key, Mnemonic Words or Keystore is disclosed or the device
              which stores or holds your Wallet PIN, Private Key, Mnemonic Words
              or Keystore is hacked or attacked, you may lose your Tokens and
              Dexlab is unable to restore them. You shall bear the foregoing
              losses on your own.
            </li>
            <li>
              We suggest you backup your Wallet PIN, Private Key, Mnemonic Words
              and Keystore when you create or import wallet by writing them down
              on papers or backup them in password management apps. Please do
              not use electronic methods such as screenshots, e-mails,
              note-taking apps in cell phones, text messages, WeChat to backup
              any of the above information.
            </li>
            <li>
              In order to avoid potential security risks, we suggest you use
              DexWallet in a secured network environment. Please do not use a
              jailbreak or Rooted mobile device. 9. Please be alert to frauds
              when you use DexWallet. If you find any suspicious conducts, we
              encourage you to inform us immediately.
            </li>
            <li>
              Please be alert to frauds when you use DexWallet. If you find any
              suspicious conducts, we encourage you to inform us immediately.
            </li>
          </ol>
          <ol>
            <div className="list-heading ">
              VI. Change, Suspension, Termination of Dexlab Service
            </div>
            <li>
              You acknowledge and accept that Dexlab may, at its sole
              discretion, provide only a part of services for the time being,
              suspend certain services or provide new services in the future.
              When we change our services, your continuous use of DexWallet is
              deemed as your acceptance of this Agreement and revisions of this
              Agreement.
            </li>
            <li>
              You understand that Dexlab may suspend services under the
              following circumstances:
              <ol className="list-style-alphabet inner-list-style">
                <li>
                  due to the maintenance, upgrading, failure of equipment and
                  blockchain system, etc., which lead to the suspension of the
                  operation of DexWallet;
                </li>
                <li>
                  due to force majeure events including but not limited to
                  typhoon, earthquake, tsunami, flood, power outage, war, or
                  terrorist attacks, or computer viruses, Trojan Horse, hacker
                  attacks, system instability or government behaviors and other
                  reasons, Dexlab is unable to provide services or in Dexlab’s
                  reasonable opinion, continuous provision of services would
                  result in significant risks;
                </li>
                <li>
                  due to other events which Dexlab cannot control or reasonably
                  predicate.
                </li>
              </ol>
            </li>
            <li>
              Dexlab reserves the right to unilaterally suspend or terminate all
              or part of the function of DexWallet under the following
              circumstances:
              <ol className="list-style-alphabet inner-list-style">
                <li>if you refuse to allow mandatory update of DexWallet;</li>
                <li>
                  if you use DexWallet to commit illegal or criminal activities;
                </li>
                <li>
                  if you conduct any illegal activities, breach this Agreement
                  etc. or other circumstances under which Dexlab reasonably
                  considers necessary to suspend services.
                </li>
              </ol>
            </li>
            <li>
              You are entitled to export your wallets within a reasonable amount
              of time if Dexlab changes, suspends or terminates its services.
            </li>
          </ol>
          <ol>
            <div className="list-heading">
              VII. Your Representations and Warranties
            </div>
            <li>
              You shall comply with:
              <ol className="list-style-alphabet inner-list-style">
                <li>all applicable laws and regulations of Switzerland and</li>
                <li>
                  all applicable laws and regulations of the country or area you
                  reside in. You shall not use DexWallet for any unlawful
                  purposes or by any unlawful means.
                </li>
              </ol>
            </li>
            <li>
              You shall not use DexWallet to commit any illegal or unlawful
              activities, including but not limited to any illegal conducts,
              such as money laundering, illegal fund raising etc.;
            </li>
            <li>
              You understand and accept that you shall be responsible for any
              violation of law (including but not limited to the regulations of
              the Customs and Tax) or for breach of this Agreement by you and
              shall indemnify Dexlab against the losses, the third-party claims
              or administrative penalties against Dexlab incurred by such
              violation or breach, including reasonable attorney’s fees.
            </li>
            <li>
              You confirm that you will pay the service fees charged by Dexlab
              in time (if applicable).
            </li>
          </ol>
          <ol>
            <div className="list-heading">VIII. Privacy Policy</div>
            <br />
            Please refer to DexWallet Privacy Policy as updated by us from time
            to time for relevant privacy protection
          </ol>
          <ol>
            <div className="list-heading">
              IX. Disclaimer and Limitation of Liability
            </div>
            <li>
              Dexlab only undertakes obligations expressly set forth in this
              Agreement.
            </li>
            <li>
              YOU ACKNOWLEDGE AND ACCEPT THAT, TO THE MAXIMUM EXTENT PERMITTED
              BY APPLICABLE LAW, DEXWALLET IS PROVIDED ON AN “AS IS” AND “WITH
              ALL FAULTS” BASIS. Dexlab shall not be held liable for malfunction
              of DexWallet which results from the following reasons:
              <ol className="list-style-alphabet inner-list-style">
                <li>system maintenance or upgrading of DexWallet;</li>
                <li>
                  force majeure, such as typhoon, earthquake, flood, lightning
                  or terrorist attack etc.;
                </li>
                <li>
                  malfunction of your mobile device hardware and software, and
                  failure of telecommunication lines and power supply lines;
                </li>
                <li>
                  your improper, unauthorized or unrecognized use of Dexlab
                  services;
                </li>
                <li>
                  computer viruses, Trojan Horse, malicious program attacks,
                  network congestion, system instability, system or equipment
                  failure, telecommunication failure, power failure, government
                  acts etc.;
                </li>
                <li>any other reasons not imputed to Dexlab.</li>
              </ol>
            </li>
            <li>
              Dexlab shall not be held liable under the following circumstances:
              <ol className="list-style-alphabet inner-list-style">
                <li>
                  Users lose their mobile devices, delete DexWallet applications
                  and wallets without back-up, forget Wallet PIN, Private Keys,
                  Mnemonic Words, Keystores without back-up, which result in the
                  loss of their Tokens;
                </li>
                <li>
                  Users disclose their Wallet PIN, Private Keys, Mnemonic Words,
                  Keystores, or lend or transfer their DexWallets to others, or
                  authorize others to use their mobile devices or DexWallets, or
                  download the wallet applications through unofficial channels,
                  or use DexWallet applications by other insecure means, which
                  result in the loss of their Tokens;
                </li>
                <li>
                  Users mishandle DexWallet (including but not limited to wrong
                  address, failure of the node servers selected by you), which
                  result in the loss of Tokens;
                </li>
                <li>
                  Users are unfamiliar with the knowledge of blockchain and
                  their mishandling of DexWallet results in loss of their
                  Tokens;
                </li>
                <li>
                  DexWallet is unable to copy accurate transaction records due
                  to system delay or blockchain instability etc.;
                </li>
                <li>
                  Users shall undertake the risks and consequences of their
                  transactions on the third-party-developed DApps.
                </li>
              </ol>
            </li>
            <li>
              You understand that DexWallet is only a management tool for Tokens
              which is incapable to control the security and legitimacy of
              products and services provided by the third-party-developed DApps
            </li>
            <li>
              You acknowledge that DexWallet may provide services to you and
              your counterparties simultaneously and you agree to waive any
              actual or potential conflicts of interests and will not claim
              against Dexlab on such base or burden Dexlab with more
              responsibilities or duty of care.
            </li>
            <li>
              Dexlab does not warrant that:
              <ol className="list-style-alphabet inner-list-style">
                <li>
                  services provided by Dexlab would satisfy all your needs;
                </li>
                <li>
                  all techniques, products, services, information or other
                  materials from Dexlab would meet your expectations;
                </li>
                <li>
                  all the transaction information in digital tokens markets
                  captured from the third party exchanges are prompt, accurate,
                  complete, and reliable;
                </li>
                <li>
                  your counterparties on DexWallet will perform their
                  obligations in the transaction agreements with you timely.
                </li>
              </ol>
            </li>
            <li>
              In any case, the total liability for Dexlab under this Agreement
              shall not exceed the greater of 20 CHF.
            </li>
            <li>
              You are aware that DexWallet is only a tool for Users to manage
              their Tokens and to display transaction information. Dexlab does
              not provide legal, tax or investment advice. You shall seek advice
              from professional legal, tax, and investment advisors. In
              addition, Dexlab shall not be liable for any investment loss, data
              loss etc. during your use of our service.
            </li>
            <li>
              You understand that we may change our entry standards, limit the
              range and ways to provide services for specific Users etc. at any
              time in accordance with Actual laws and regulations.
            </li>
          </ol>
          <ol>
            <div className="list-heading">X. Entire Agreement</div>
            <li>
              This Agreement incorporates DexWallet Terms of Service, DexWallet
              Privacy Policy, and other rules posted by Dexlab from time to
              time.
            </li>
            <li>
              If any provision of this Agreement is found by a court with
              competent jurisdiction to be invalid, the other provisions of this
              Agreement remain in full force and effect.
            </li>
          </ol>
          <ol>
            <div className="list-heading">
              XI. Intellectual Property Rights Protection
            </div>
            <li>
              DexWallet is an application developed and owned by Dexlab. The
              intellectual property rights of any contents displayed in
              DexWallet (including this Agreement, announcements, articles,
              videos, audios, images, archives, information, materials,
              trademarks or logos) are owned by Dexlab or the third party
              licensors. Users can only use the DexWallet applications and its
              contents for the purpose of holding and managing their Tokens. In
              particular, without prior written consent from DexWallet or the
              third party licensors, no one shall use, modify, decompile,
              reproduce, publicly disseminate, alter, distribute, issue or
              publicly publish the above mentioned applications and contents.
            </li>
          </ol>
          <ol>
            <div className="list-heading">
              XII. Governing Law and Dispute Resolution
            </div>
            <li>
              The validity, interpretation, alternation, enforcement, dispute
              resolution of this Agreement and its revised versions shall be
              governed and construed in accordance with the laws of Switzerland.
              Where there is no applicable law, this Agreement shall be
              interpreted by applicable commercial and/or industrial practices.
            </li>
            <li>
              If any dispute or claim in connection with this Agreement arises
              between you and Dexlab, the parties shall first attempt to resolve
              the dispute or claim through amicable negotiations in good faith.
              If the parties cannot reach an agreement, either party may sue the
              other party at the competent court where Dexlab is located.
            </li>
          </ol>
          <ol>
            <div className="list-heading">XIII. Miscellaneous</div>
            <li>
              If you live outside of Switzerland, you shall fully understand and
              conform to the laws, regulations and rules in your jurisdictions
              which are relevant to use of Dexlab services.
            </li>
            <li>
              This Agreement shall become effective on August 25, 2018. As for
              any issues not covered in this Agreement, you shall comply with
              the announcements and relevant rules as updated by Dexlab from
              time to time.
            </li>
          </ol>
        </div>
        Please make sure to consult our{' '}
        <Link to="https://www.dexwallet.io/privacy-policy/">
          Privacy Policy
        </Link>
        .
      </div>
    </Container>
  </React.Fragment>
);

export default TermsAndConditionMain;
