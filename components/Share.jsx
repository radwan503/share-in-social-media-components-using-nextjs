"use client";

import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon
} from "react-share";
import { useBoolean } from "usehooks-ts";

// type Props = {
//  shareUrl: string;
//  title: string;
//  children: React.ReactNode;
// };
const ShareComponets = ({ shareUrl, title, children }) => {
  const popup = useBoolean(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    popup.setTrue();
  };

  const handleClose = (event) => {
    event.stopPropagation();
    popup.setFalse();
  };

  return (
    <Box onClick={handleOpen} display="inline-flex">
      {children}
      <Dialog
        open={popup.value}
        onClose={handleClose}
        fullWidth
        maxWidth={"xs"}
      >
        <DialogTitle sx={{ py: 1 }}>Share with</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 4,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <DialogContent dividers>
          <Box>
            {/* <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, md: 2 }}
            > */}
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              <FacebookShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <XIcon size={32} round />
              </TwitterShareButton>

              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>

              <PinterestShareButton
                url={String(window.location)}
                media={`${String(window.location)}/No-Syndicate-RGB.png`}
                className="Demo__some-network__share-button"
              >
                <PinterestIcon size={32} round />
              </PinterestShareButton>

              <VKShareButton
                url={shareUrl}
                image={`${String(window.location)}/No-Syndicate-RGB.png`}
                className="Demo__some-network__share-button"
              >
                <VKIcon size={32} round />
              </VKShareButton>

              <OKShareButton
                url={shareUrl}
                image={`${String(window.location)}/No-Syndicate-RGB.png`}
                className="Demo__some-network__share-button"
              >
                <OKIcon size={32} round />
              </OKShareButton>

              <RedditShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>

              <GabShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={640}
                className="Demo__some-network__share-button"
              >
                <GabIcon size={32} round />
              </GabShareButton>

              <TumblrShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TumblrIcon size={32} round />
              </TumblrShareButton>

              <LivejournalShareButton
                url={shareUrl}
                title={title}
                description={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LivejournalIcon size={32} round />
              </LivejournalShareButton>

              <MailruShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <MailruIcon size={32} round />
              </MailruShareButton>

              <EmailShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>

              <ViberShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <ViberIcon size={32} round />
              </ViberShareButton>

              <WorkplaceShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
              >
                <WorkplaceIcon size={32} round />
              </WorkplaceShareButton>

              <LineShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <LineIcon size={32} round />
              </LineShareButton>

              <WeiboShareButton
                url={shareUrl}
                title={title}
                image={`${String(window.location)}/No-Syndicate-RGB.png`}
                className="Demo__some-network__share-button"
              >
                <WeiboIcon size={32} round />
              </WeiboShareButton>

              <PocketShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <PocketIcon size={32} round />
              </PocketShareButton>

              <InstapaperShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>

              <HatenaShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button"
              >
                <HatenaIcon size={32} round />
              </HatenaShareButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
export default ShareComponets 