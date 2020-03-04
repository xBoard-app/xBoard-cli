declare namespace EnvoyConfig {
  export interface SocketAddress {
    address: string;
    port_value: number;
  }

  export interface Address {
    socket_address: SocketAddress;
  }

  export interface Admin {
    access_log_path: string;
    address: Address;
  }

  export interface SocketAddress2 {
    address: string;
    port_value: number;
  }

  export interface Address2 {
    socket_address: SocketAddress2;
  }

  export interface Match {
    prefix: string;
  }

  export interface Route2 {
    cluster: string;
    max_grpc_timeout: string;
  }

  export interface Route {
    match: Match;
    route: Route2;
  }

  export interface GoogleRe2 {}

  export interface SafeRegex {
    google_re2: GoogleRe2;
    regex: string;
  }

  export interface AllowOriginStringMatch {
    safe_regex: SafeRegex;
  }

  export interface DefaultValue {
    numerator: number;
    denominator: string;
  }

  export interface FilterEnabled {
    default_value: DefaultValue;
    runtime_key: string;
  }

  export interface Cors {
    allow_origin_string_match: AllowOriginStringMatch[];
    allow_methods: string;
    allow_headers: string;
    max_age: string;
    expose_headers: string;
    filter_enabled: FilterEnabled;
  }

  export interface VirtualHost {
    name: string;
    domains: string[];
    routes: Route[];
    cors: Cors;
  }

  export interface RouteConfig {
    name: string;
    virtual_hosts: VirtualHost[];
  }

  export interface HttpFilter {
    name: string;
  }

  export interface Config {
    codec_type: string;
    stat_prefix: string;
    route_config: RouteConfig;
    http_filters: HttpFilter[];
  }

  export interface Filter {
    name: string;
    config: Config;
  }

  export interface FilterChain {
    filters: Filter[];
  }

  export interface Listener {
    name: string;
    address: Address2;
    filter_chains: FilterChain[];
  }

  export interface Http2ProtocolOptions {}

  export interface SocketAddress3 {
    address: string;
    port_value: number;
  }

  export interface Host {
    socket_address: SocketAddress3;
  }

  export interface Cluster {
    name: string;
    connect_timeout: string;
    type: string;
    http2_protocol_options: Http2ProtocolOptions;
    lb_policy: string;
    hosts: Host[];
  }

  export interface StaticResources {
    listeners: Listener[];
    clusters: Cluster[];
  }

  export interface RootObject {
    admin: Admin;
    static_resources: StaticResources;
  }
}
