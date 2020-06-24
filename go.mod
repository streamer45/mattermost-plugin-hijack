module github.com/mattermost/mattermost-plugin-starter-template

go 1.12

require (
	github.com/go-ldap/ldap v3.0.3+incompatible // indirect
	github.com/gorilla/websocket v1.4.2
	github.com/mattermost/mattermost-server v5.11.1+incompatible
	github.com/mattermost/mattermost-server/v5 v5.20.0
	github.com/nicksnyder/go-i18n v1.10.1 // indirect
	github.com/pkg/errors v0.9.1
	github.com/stretchr/testify v1.5.1
	gopkg.in/asn1-ber.v1 v1.0.0-20181015200546-f715ec2f112d // indirect
)

replace github.com/mattermost/mattermost-server/v5 v5.20.0 => /home/streamer45/go/src/github.com/mattermost/mattermost-server
