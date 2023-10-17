import React from "react";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

export default function AccetableContent() {
  return (
    <div>
      <Typography variant="h1">Acceptable use policy</Typography>
      <Typography>
        We do not allow any activity or content that promotes or encourages
        discrimination based on race, sex, religion, nationality, disability,
        sexual orientation, or age. To provide specific examples (though by no
        means an exhaustive list), you cannot:
      </Typography>
      <List>
        <ListItem>Threaten any specific individual</ListItem>
        <ListItem>
          Incite violence against a specific person, place, or group
        </ListItem>
        <ListItem>
          Share private information about a citizen without their permission
        </ListItem>
      </List>
      <Typography variant="h2">
        Prohibited businesses (for Skool payments)
      </Typography>
      <Typography>
        The following products and activities are not allowed to be monetized
        using Skool's payments system. This is almost always because they
        violate U.S. federal law, they are prohibited by card network rules, or
        they are restricted by our payment processing partners. If you are
        unsure whether your content is prohibited on Skool, please contact us at{" "}
        <Link underline="none" href="mailto:help@skoolclone.com">
          help@skoolclone.com
        </Link>{" "}
        with a description or example of the content.
      </Typography>
      <List sx={{ listStyleType: "decimal" }}>
        <ListItem>Unlicensed proprietary content</ListItem>
        <ListItem>
          Food products and ingredients (including consumer packaged goods,
          livestock, plants, and seeds)
        </ListItem>
        <ListItem>Airlines</ListItem>
        <ListItem>Bail bonds</ListItem>
        <ListItem>Bankruptcy lawyers</ListItem>
        <ListItem>Bidding fee or penny auctions</ListItem>
        <ListItem>Age or legally restricted products or services</ListItem>
        <ListItem>
          Sexually-oriented or pornographic content (including but not limited
          to adult books or video, adult telephone conversations or audio,
          membership to adult websites or content, companion or escort services,
          dating services, mail-order brides, massage parlors and prostitution,
          or content of any format that features characters who are minors, are
          depicted as minors, or are suggested to be minors in any sexual or
          sensual context)
        </ListItem>
        <ListItem>Cell phones/pagers</ListItem>
        <ListItem>Centralized reservation services</ListItem>
        <ListItem>Collection agencies</ListItem>
        <ListItem>Chain letters</ListItem>
        <ListItem>Check cashing</ListItem>
        <ListItem>Counterfeit goods/replicas</ListItem>
        <ListItem>
          Currency exchange (including physical, digital or cryptographic
          currency exchange)
        </ListItem>
        <ListItem>Consulting firms</ListItem>
        <ListItem>
          Services (including, but not limited to, "get rich quick" schemes,
          business opportunities, investment opportunities, mortgage consulting,
          real estate purchases, mortgage reduction services and credit repair
          and protection)
        </ListItem>
        <ListItem>
          Billing services (including, but not limited to, accepting payment for
          services rendered and billing for services to be performed in the
          future)
        </ListItem>
        <ListItem>Credit card and identity theft protection</ListItem>
        <ListItem>Cruise lines</ListItem>
        <ListItem>Flea markets</ListItem>
        <ListItem>Drug paraphernalia</ListItem>
        <ListItem>Essay mills/paper mills</ListItem>
        <ListItem>Extended warranties</ListItem>
        <ListItem>Fortune tellers</ListItem>
        <ListItem>
          Gambling (including legal gambling where the cardholder is not present
          when the bet is made, lotteries, illegal gambling, internet gambling,
          sports forecasting and odds making)
        </ListItem>
        <ListItem>Illegal products or services</ListItem>
        <ListItem>
          Marijuana dispensaries and related businesses Money transmission
        </ListItem>
        <ListItem>Money service businesses</ListItem>
        <ListItem>Multi-level marketing or pyramid schemes</ListItem>
        <ListItem>Wire transfers or money orders</ListItem>
        <ListItem>
          Pharmacies or internet pharmacies Pseudo pharmaceuticals (including
          anti-aging pills, sexual stimulants, weight loss pills, diet pills)
        </ListItem>
        <ListItem>Quasi-cash or stores of value</ListItem>
        <ListItem>Security brokerage</ListItem>
        <ListItem>Door-to-door sales</ListItem>
        <ListItem>
          Offering substantial rebates or special incentives that are awarded to
          the cardholder subsequent to the original purchase
        </ListItem>
        <ListItem>Negative response marketing techniques</ListItem>
        <ListItem>Deceptive marketing practices</ListItem>
        <ListItem>Reselling private label rights products</ListItem>
        <ListItem>Shipping/forwarding brokers</ListItem>
        <ListItem>Substances designed to mimic illegal drugs</ListItem>
        <ListItem>Telemarketing</ListItem>
        <ListItem>Timeshares</ListItem>
        <ListItem>Tobacco products</ListItem>
        <ListItem>Weapons or ammunition</ListItem>
        <ListItem>Jewelry or beauty products</ListItem>
      </List>
      <Typography>
        This list is maintained separately from Skool's{" "}
        <Link underline="none" href="/legal?t=terms">
          Terms and conditions
        </Link>{" "}
        Skool makes every effort to keep this list as current as possible.
        However, because of the unpredictable nature of card network rules,
        legislation and payment processor relationships, this list may change
        abruptly and without notice. Changes to this list take effect
        immediately.
      </Typography>
    </div>
  );
}
