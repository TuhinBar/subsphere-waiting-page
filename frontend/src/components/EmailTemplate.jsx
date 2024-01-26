// not used currently

import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export function EmailTemplate({}) {
  return (
    <Html>
      <Head />
      <Preview>Thank You for Joining SubSphere</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`https://i.imgur.com/bTM3hel.png`} />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`https://i.imgur.com/MI44bcO.jpg`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi!
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank You for Joining the SubSphere Waitlist!
                </Heading>

                <Text style={paragraph}>
                  <b>
                    Thank you for becoming a member of The SubSphere waitlist.
                  </b>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  SubSphere offers a comprehensive solution for all your
                  membership, subscription, and billing management needs.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  We will provide you with updates on the launch and send you an
                  invitation immediately upon our early access launch.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Have question about the SubSphere? We'd love to help! Just hit
                  reply :)
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Want to know more about what we offer?
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>Learn More</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`https://react-email-demo-7s5r0trkn-resend.vercel.app/static/yelp-footer.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | FiNDiNG Matrix, INDIA | https://waitlist.thesubsphere.com/
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#86a7fc",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

export default EmailTemplate;
